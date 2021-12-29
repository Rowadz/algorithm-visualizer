import { DEFAULT_STEP_TIME } from 'app/const'

export const sleep = (stepSpeed: number = DEFAULT_STEP_TIME): Promise<void> =>
    new Promise<void>((res) => setTimeout(res, stepSpeed))
