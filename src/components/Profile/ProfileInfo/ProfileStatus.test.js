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

  test("input edit mode insted of span", () => {
    const component = create(<ProfileStatus status="blabla" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("blabla");
  });

  test("input edit mode insted of span", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="blabla" updateUserStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
