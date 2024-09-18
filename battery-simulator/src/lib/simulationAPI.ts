
// Helper functions (it makes it easier for us to use) to access the battery simulation api

const BATTERY_SIMULATION_API = "http://localhost:8084/simulate"

// buildSimulation -> build the simulation object to send over to the API
export function buildSimulation(
    batteryModel = { battery_chemistry: "LFP", bpx_battery_models: "lfp_18650_cell_BPX" },
    electrochemicalModel = { model: "SPM", cell_geometry: "arbitrary", thermal_model: "isothermal" },
    solverModel = { solver: "CasadiSolver", tolerance: { atol: 1e-6, rtol: 1e-6 }, mode: "safe" },
    simulationDetails = {
        type: "drive_cycle",
        drive_cycle: { drive_cycle_file: "LFP_25degC_1C" },
        experiment: {
            conditions: [
                "Discharge at C/5 for 10 hours or until 2.5 V",
                "Rest for 1 hour",
                "Charge at 1 A until 3.5 V",
                "Hold at 3.5 V until 10 mA",
                "Rest for 1 hour"
            ]
        },
        time_eval: { conditions: [0, 7200] }
    },
    displayParams = ["Terminal voltage [V]", "Current [A]", "Discharge capacity [A.h]"]
) {
    return {
        battery_model: batteryModel,
        electrochemical_model: electrochemicalModel,
        solver_model: solverModel,
        simulation: simulationDetails,
        display_params: displayParams
    };
}

// fetchSimulation -> given an object return simulate data { .... }
export async function fetchSimulation() {
    try {
        const simulationData = buildSimulation();

        const response = await fetch(BATTERY_SIMULATION_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(simulationData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Simulation failed");
        }

        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error occurred while submitting data:', error.message);
        } else {
            console.error('An unknown error occurred');
        }
        throw error;
    }
}




