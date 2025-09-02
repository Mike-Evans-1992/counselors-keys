import { HERO_INTRO } from "@/data/heroIntro";
import { HeroIntro } from "@/types/hero";

export async function getHeroIntro(): Promise<HeroIntro> {
    // Simulate an async operation, e.g., fetching from a database or API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(HERO_INTRO);
        }, 100); // Simulated delay
    });

    // Later: return fetch('/api/hero-intro').then(res => res.json());
}