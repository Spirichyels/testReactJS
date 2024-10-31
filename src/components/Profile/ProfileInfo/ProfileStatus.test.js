import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  //   test("after creation <span> should be displayed", () => {
  //     const component = create(<ProfileStatus status="blabla" />);
  //     const instance = component.getInstance();

  //     expect(instance.state.status).toBe("blabla");
  //   });

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="blabla" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <input> ", () => {
    const component = create(<ProfileStatus status="blabla" />);
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="blabla" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Ваш статус =");
  });
});
