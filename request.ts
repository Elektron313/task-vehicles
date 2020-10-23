import vehicles from './vehicles.json';
import { VehicleType } from '~/types';

/** True = 65%, False = 35% */
const rejectByChance = (): Boolean => {
    return Math.random() <= 0.35;
};

/** Emulate request */
export const getVehicles = (): Promise<VehicleType[]> =>
    new Promise((resolve, reject) => {
        const delay = parseInt(Math.random() * 1000 + '');

        if (rejectByChance()) {
            setTimeout(() => {
                reject({
                    error: 'Server error',
                });
            }, delay);
        }
        setTimeout(() => {
            resolve(vehicles);
        }, delay);
    });
