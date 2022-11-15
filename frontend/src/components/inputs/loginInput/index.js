import "./style.css";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";

export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({
    query: "(min-width: 850px)",
  });
  console.log(desktopView);
  return (
    <div className="input__wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktopView
              ? "input__wrap__error input_error_desktop"
              : "input__wrap__error"
          }
          style={{ transform: "translateY(3px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={desktopView ? "error_arrow_left" : "error_arrow_top"}
            ></div>
          )}
        </div>
      )}

      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      ></input>
      {meta.touched && meta.error && bottom && (
        <div
          className={
            desktopView
              ? "input__wrap__error input_error_desktop"
              : "input__wrap__error"
          }
          style={{ transform: "translateY(2px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div className="error_arrow_bottom"></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{
            top: `${!bottom && !desktopView && "64%"} `,
          }}
        ></i>
      )}
    </div>
  );
}
