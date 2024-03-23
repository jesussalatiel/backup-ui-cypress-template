class HomePage {
  readonly Selectors = {
    modalTermsAndConditions:
      'Estamos encantados de darte la bienvenida a nuestra plataforma. En OKA encontrarás soluciones simples, rápidas y transparentes para financiar tus compras.',
  };

  acceptTermsAndConditions(acceptOkaCredit: string) {
    cy.contains(this.Selectors.modalTermsAndConditions)
      .parents()
      .eq(2)
      .find('button')
      .eq(acceptOkaCredit === 'true' ? 2 : 1)
      .click();
  }

  showTermsAndConditions(showTermsAndConditions: string) {
    if (showTermsAndConditions === 'true') {
      cy.contains(this.Selectors.modalTermsAndConditions)
        .parent()
        .find('button')
        .eq(0)
        .click();
    }
  }

  selectElementToInteract(elementType: any) {
    const listOfElementType = elementType.elementType.split(':');
    const elementToClick = listOfElementType[0];
    switch (elementToClick) {
      case 'button':
        this.performButtonAction(listOfElementType[1], elementType);
        break;
      default:
        throw new Error(`Unsupported element type: ${elementToClick}`);
    }
  }

  private performButtonAction(performActions: string, elementType?: any) {
    let selector;
    switch (performActions) {
      case 'back':
        selector = '[alt="arrow-left"]';
        cy.get(selector).should('be.visible').click();
        break;
      case 'close':
        selector = 'button.absolute';
        cy.get(selector).should('be.visible').click();
        break;
      case 'outside':
        cy.get('body').click(0, 10, { force: true });
        break;
      case 'callUs':
        selector = '[aria-haspopup="dialog"]';
        cy.get(selector).should('be.visible').click();
        break;
      case 'Entendido':
        selector = 'Entendido';
        cy.contains(selector).should('be.visible').click();
        break;
      case 'click':
        if (elementType.text) {
          cy.contains(elementType.text).click();
        } else if (elementType.locator) {
          cy.get(elementType.locator).click();
        }
        break;
      default:
        throw new Error(`Unsupported action: ${performActions}`);
    }
  }
}

export default new HomePage();
