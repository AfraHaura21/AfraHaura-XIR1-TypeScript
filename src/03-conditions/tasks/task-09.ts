/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */
let PoweredOn:boolean = true;
let temperature:number = 95;
let VibrationHigh:boolean = false;
let productionSpeed:number = 0.92; // 92%
let machineStatus = "";

if (!PoweredOn) {
    machineStatus = "Machine Offline";
} else {
    if (temperature > 90) {
        if (VibrationHigh) {
            machineStatus = "Emergency Shutdown";
        } else {
            machineStatus = "Cooling Required";
        }
    } else {
        if (productionSpeed < 0.80) {
            machineStatus = "Performance Warning";
        } else {
            machineStatus = "Machine Operating Normally";
        }
    }
}

console.log("Status Mesin Hari Ini: " + machineStatus);

