Feature: Login - Validate Login Feature

  @HappyPath
  @Login
  Scenario Outline: Should be able to see "Ingresar" button disable - <device>
    Given I optimizes the view with the following params:
      | device   |
      | <device> |
    When I execute a sign-in action on the system with following data:
      | mobile                 | password | submit |
      | local:default:settings |          | false  |
    Then I should validate "Ingresar" button is "disable"

    Examples:
      | device  |
      | Desktop |
      | Tablet  |
      | Mobile  |


  @HappyPath
  @Login
  Scenario Outline: Design Validation Should Succeed for <device> Devices
    Given I optimizes the view with the following params:
      | device   |
      | <device> |
    Then I should validate the following table of elements:
      | showInDevice | elementType     | locator      | search                    |
      | All          | text            | null         | ¡HOLA!                    |
      | All          | text            | null         | Qué bueno verte por aquí. |
      | All          | text            | null         | Llámanos                  |
      | All          | text            | null         | Celular                   |
      | All          | text            | null         | Contraseña                |
      | All          | text            | null         | Ingresar                  |
      | All          | text            | null         | ¿Olvidaste tu contraseña? |
      | All          | text            | null         | Con el respaldo de        |
      | All          | placeholder     | #phoneNumber | Escribe tu celular        |
      | All          | placeholder     | #password    | Escribe tu contraseña     |
      | All          | button:disabled | null         | Ingresar                  |
      | All          | text            | null         | Con el respaldo de        |

    Examples:
      | device  |
      | Desktop |
      | Tablet  |
      | Mobile  |

  @HappyPath
  @Login
  Scenario Outline: Should be able to see "Ingresar" button enable - <device>
    Given I optimizes the view with the following params:
      | device   |
      | <device> |
    When I execute a sign-in action on the system with following data:
      | code                   | mobile                 | password               | submit |
      | local:default:settings | local:default:settings | local:default:settings | false  |
    Then I should validate "Ingresar" button is "enable"

    Examples:
      | device  |
      | Desktop |
      | Tablet  |
      | Mobile  |


  @HappyPath
  @Login
  Scenario Outline: Should be able to see password when click on show eye button - <device>
    Given I optimizes the view with the following params:
      | device   |
      | <device> |
    When I execute a sign-in action on the system with following data:
      | code                   | mobile                 | submit |
      | local:default:settings | local:default:settings | false  |
    When I type my authentication credentials
      | password          |
      | IncorrectP@ssword |
    Then I should validate password input change to "text"
    When I type my authentication credentials
      | password          |
      | IncorrectP@ssword |
    Then I should validate password input change to "password"

    Examples:
      | device  |
      | Desktop |
      | Mobile  |
      | Tablet  |

  @HappyPath
  @Login
  Scenario Outline: Should be able to get a incorrect login message - <device>
    Given I optimizes the view with the following params:
      | device   |
      | <device> |
    When I execute a sign-in action on the system with following data:
      | code                   | mobile                 | password         | expectedMessage                          | submit |
      | local:default:settings | local:default:settings | Inco             | Debe contener al menos 8 caracteres      | false  |
      | local:default:settings | local:default:settings | ncorrect4@ssworD | Celular o contraseña inválida            | true   |
      | local:default:settings | 899999999              | short            | El número de celular debe comenzar en 9. | false  |
      | local:default:settings | local:default:settings | 12               | Debe contener al menos 8 caracteres      | false  |

    Examples:
      | device  |
      | Desktop |
      | Mobile  |
      | Tablet  |
