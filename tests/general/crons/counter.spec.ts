import { initServer } from "..";
import { viewResult, Fort, textResult } from "fortjs";

describe("counter scheduler", () => {
    beforeAll(async () => {
        await initServer();
    });

    const taskName = "Counter";


    it("get invalid class task", async () => {
        try {
            const task = Fort.scheduler.getTaskInputByName("taskName");
        } catch (error) {
            expect(error.message).toEqual("Cron task taskName is not registered.");
        }
    })

    it("get valid class task", async () => {
        const task = Fort.scheduler.getTaskInputByName(taskName);
        expect(task.name).toEqual(taskName);
    })

    it("get invalid task", async () => {
        try {
            const task = Fort.scheduler.getTask("taskName");
        } catch (error) {
            expect(error.message).toEqual("Cron task taskName does not exist");
        }
    })

    it("value check", async () => {
        const task = Fort.scheduler.getTask(taskName);
        expect(task['counter']).toEqual(0);
    })

    afterAll(() => {
        return Fort.destroy();
    });
})