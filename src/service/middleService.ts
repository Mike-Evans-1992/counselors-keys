import { MIDDLE_DATA } from "@/data/middleData";
import { MiddleProps } from "@/types/middle";

export async function getMiddleData(): Promise<MiddleProps> {
    // Simulate an async operation, e.g., fetching from a database or API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MIDDLE_DATA);
        }, 100); // Simulated delay
    });

    // Later: return fetch('/api/middle-data').then(res => res.json());
}