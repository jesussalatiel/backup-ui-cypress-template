import { listOfSupportedDevices } from 'cypress/support/commands/devices/viewPorts';

class AssertPage {
  verifyImageIsVisible(locator: string) {
    cy.get(locator).should('be.visible');
  }

  verifyTextElementText(locator: string, text: string) {
    const targetElement = locator !== 'null' ? cy.get(locator) : cy.contains(text);
    targetElement.scrollIntoView();
    targetElement.should('have.text', text);
  }

  verifyPlaceholderText(locator: string, placeholderText: string) {
    cy.get(locator).should('have.attr', 'placeholder', placeholderText);
  }

  verifyButtonIsDisplayed(locator: string, buttonName: string, action: string) {
    const buttonElement = locator === 'null' ? cy.contains(buttonName) : cy.get(locator);

    switch (action) {
      case 'enabled':
        buttonElement.should('be.enabled');
        break;
      case 'disabled':
        buttonElement.should('be.disabled');
        break;
      case 'notExist':
        buttonElement.should('not.exist');
        break;
      default:
        throw new Error(`Unsupported action: ${action}`);
    }
  }

  verifyListOfElements(row: any) {
    const { elementType, locator, search } = row;
    const listOfElementType = elementType.split(':');

    const elementToCheck = elementType.includes('button:')
      ? listOfElementType[0]
      : elementType;

    switch (elementToCheck) {
      case 'image':
        return this.verifyImageIsVisible(locator);
      case 'text':
        return this.verifyTextElementText(locator, search);
      case 'placeholder':
        return this.verifyPlaceholderText(locator, search);
      case 'button':
        return this.verifyButtonIsDisplayed(
          locator,
          search,
          listOfElementType[1],
        );
      default:
        throw new Error(`Unsupported element type: ${elementType}`);
    }
  }

  verifyListOfElementsForDevice(row: any, executorDevice: any) {
    const listOfDevicesFromDataTable = row.showInDevice.split('and');

    const devicesSet = new Set<string>(
      listOfDevicesFromDataTable.map((device) => device.trim().replace(/\s/g, '')),
    );

    devicesSet.forEach((deviceWithoutSpaces) => {
      if (!this.verifyDeviceIsListOfDevices(deviceWithoutSpaces)) {
        throw new Error(
          `Unsupported device type: ${deviceWithoutSpaces}. Please use 'Desktop', 'Tablet', or 'Mobile'.`,
        );
      }

      if (JSON.stringify(executorDevice).includes(deviceWithoutSpaces)) {
        this.verifyListOfElements(row);
      }
    });
  }

  verifyDeviceIsListOfDevices(deviceToSearch: string) {
    return deviceToSearch in listOfSupportedDevices;
  }

  private buttonActions() {}
}

export default new AssertPage();
