import { akronim } from "./akronim.js";

describe("akronim", () => {
    it("should create correct acronym", () => {
        expect(akronim("Mustafa Kemal Atatürk")).toBe("MKA");
        expect(akronim("Euro Truck Simulator 2")).toBe("ETS2");
        expect(akronim("Game of Thrones")).toBe("GOT");
        expect(akronim("God of War", { ignoreLowercaseWords: true })).toBe("GW");
        expect(akronim("Watch_Dogs")).toBe("W_D");
        expect(akronim("GitHub")).toBe("GH");
        expect(akronim("Watch Dogs", { separateWith: "." })).toBe("W.D.");
        expect(akronim("Watch Dogs", { separateWith: ".", trimLastSeparator: true })).toBe("W.D");
    });

    it("should trim spaces from 'text' and 'separateWith'", () => {
        expect(akronim("   To be announced   ")).toBe("TBA");
        expect(akronim("The Lord of the Rings", { separateWith: " - " })).toBe("T-L-O-T-R-");
    });

    describe("argument validations", () => {
        describe("text", () => {
            it("should throw error if 'text' is invalid", () => {
                [null, {}, [], true, false].forEach(testValue => {
                    expect(() => {
                        akronim(testValue);
                    }).toThrowError("\"text\" must be a string or a number.");
                });

                expect(() => {
                    akronim("");
                }).toThrowError("\"text\" cannot be empty.");
            });

            it("should not throw error if 'text' is valid", () => {
                [0, 1, -1, NaN, Infinity, "A"].forEach(testValue => {
                    expect(() => {
                        akronim(testValue);
                    }).not.toThrow();
                });
            });
        });

        describe("options", () => {
            const options = {
                ignoreLowercaseWords: false,
                separateWith: "",
                trimLastSeparator: false
            };

            describe("ignoreLowercaseWords|trimLastSeparator", () => {
                it("should throw error if 'ignoreLowercaseWords' or 'trimLastSeparator' is invalid", () => {
                    [null, {}, [], 0, 1, -1, NaN, Infinity, "", "A"].forEach(testValue => {
                        expect(() => {
                            akronim("GitHub", { ...options, ignoreLowercaseWords: testValue });
                        }).toThrowError("\"ignoreLowercaseWords\" must be a boolean.");

                        expect(() => {
                            akronim("GitHub", { ...options, trimLastSeparator: testValue });
                        }).toThrowError("\"trimLastSeparator\" must be a boolean.");
                    });
                });

                it("should not throw error if 'ignoreLowercaseWords' or 'trimLastSeparator' is valid", () => {
                    // "undefined" causes default value to be used
                    [undefined, true, false].forEach(testValue => {
                        expect(() => {
                            akronim("GitHub", { ...options, ignoreLowercaseWords: testValue });
                        }).not.toThrow();

                        expect(() => {
                            akronim("GitHub", { ...options, trimLastSeparator: testValue });
                        }).not.toThrow();
                    });
                });
            });

            describe("separateWith", () => {
                it("should throw error if 'separateWith' is invalid", () => {
                    [null, {}, [], true, false].forEach(testValue => {
                        expect(() => {
                            akronim("GitHub", { ...options, separateWith: testValue });
                        }).toThrowError("\"separateWith\" must be a string or a number.");
                    });
                });

                it("should not throw error if 'separateWith' is valid", () => {
                    // "undefined" makes use of the default value
                    [undefined, 0, 1, -1, NaN, Infinity, "", "A"].forEach(testValue => {
                        expect(() => {
                            akronim("GitHub", { ...options, separateWith: testValue });
                        }).not.toThrow();
                    });
                });
            });
        });
    });
});
