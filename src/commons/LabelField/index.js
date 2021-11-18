var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
};

import * as React from 'react';
import Form from 'rc-field-form';
const { Field } = Form;
const Error = ({ children }) => (<ul style={{ color: 'red' }}>
    {children.map((error, index) => (<li key={index}>{error}</li>))}
  </ul>);
const FieldState = ({ touched, validating }) => (<div style={{
        color: 'green',
        position: 'absolute',
        marginTop: -35,
        left: 300,
    }}>
    {touched ? <span>Touched!</span> : null}
    {validating ? <span>Validating!</span> : null}
  </div>);
const LabelField = (_a) => {
    var { name, label, children } = _a, restProps = __rest(_a, ["name", "label", "children"]);
    return (<Field name={name} {...restProps}>
    {(control, meta, form) => {
            const childNode = typeof children === 'function'
                ? children(control, meta, form)
                : React.cloneElement(children, Object.assign({}, control));
            return (<div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ flex: 'none', width: 100 }}>{label || name}</label>

            {childNode}
          </div>

          <FieldState {...meta}/>
          <Error>{meta.errors}</Error>
        </div>);
        }}
  </Field>);
};
export default LabelField;