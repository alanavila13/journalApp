import { startNewNote } from "../../../src/store/journal/thunks";

describe("Pruebas en journal thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("startNewNotes debe de crear una nota en blanco", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({
      auth: {
        uid: uid,
      },
    });
    await startNewNote()(dispatch, getState);
  });
});
