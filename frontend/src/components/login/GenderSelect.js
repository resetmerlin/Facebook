import { useMediaQuery } from "react-responsive";

export default function GenderSelect({ handleRegisterChange, genderErro }) {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${genderErro && !view3 && "80px"}` }}
    >
      <label htmlFor="male">
        Male
        <input
          type={"radio"}
          name="gender"
          id="male"
          value={"male"}
          onChange={handleRegisterChange}
        />
      </label>

      <label htmlFor="female">
        Female
        <input
          type={"radio"}
          name="gender"
          id="female"
          value={"female"}
          onChange={handleRegisterChange}
        />
      </label>
      {genderErro && (
        <div className="input__wrap__error">
          <div className="error_arrow_bottom"></div>
          {genderErro}
        </div>
      )}
    </div>
  );
}
