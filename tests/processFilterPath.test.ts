import {describe, expect} from "@jest/globals";
import {
  processFilterPath,
  filterDataObject,
} from "../src/routes/routerUtilities/processFilterPath";

describe("processFilterPath: ", () => {
  //SECTION - test no. 1
  it("Should process SQL rows and return the expected response: GET http://localhost:4000/category/sneakers.", () => {
    const expectedInput = "Zalton.UrbanStep_red.white.black__size-40.41.46.48";
    const expectedOutput: filterDataObject = {
      brandsArray: ["Zalton", "UrbanStep"],
      colorsArray: ["red", "white", "black"],
      sizesArray: ["40", "41", "46", "48"],
    };

    const result = processFilterPath(expectedInput);

    expect(result).toEqual(expectedOutput);
  });

  //SECTION - test no. 2
  it("EXPECT LOG: Invalid input: Contains more than one '__size-' delimiter", () => {
    // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    processFilterPath(
      "__size-40.41.46.48Zalton.UrbanStep_red.white.black__size-40.41.46.48"
    );

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy.mock.calls[0][0]).toContain(
      "Invalid input: Contains more than one '__size-' delimiter"
    );
    errorSpy.mockRestore();
  });

  //SECTION - test no. 3
  it("EXPECT LOG: Invalid input: Contains more than one '_' delimiter - no 1.", () => {
    // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    processFilterPath("Zalton.UrbanStep_re_d_.white.black__size-40.41.46.48");

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy.mock.calls[0][0]).toContain(
      "Invalid input: Contains more than one '_' delimiter."
    );
    errorSpy.mockRestore();
  });

  //SECTION - test no. 4
  it("EXPECT LOG: Invalid input: Contains more than one '_' delimiter - no 2.", () => {
    // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    processFilterPath("Zalton.UrbanStep_re_d_.white.black");

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy.mock.calls[0][0]).toContain(
      "Invalid input: Contains more than one '_' delimiter."
    );
    errorSpy.mockRestore();
  });

  //SECTION - test no. 5
  it("EXPECT LOG: Invalid input: Contains consecutive dots.", () => {
    // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    processFilterPath("Zalton.UrbanStep_red..white.black__size-40.41.46.48");

    expect(errorSpy).toHaveBeenCalled();
    expect(errorSpy.mock.calls[0][0]).toContain(
      "Invalid input: Contains consecutive dots."
    );
    errorSpy.mockRestore();
  });
});
