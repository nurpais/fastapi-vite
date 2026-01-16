// import { transform } from "enketo-transformer/web";

// const xform = `
// <?xml version="1.0" encoding="UTF-8"?>
// <h:html
//   xmlns="http://www.w3.org/2002/xforms"
//   xmlns:h="http://www.w3.org/1999/xhtml"
//   xmlns:ev="http://www.w3.org/2001/xml-events"
//   xmlns:xsd="http://www.w3.org/2001/XMLSchema"
//   xmlns:jr="http://openrosa.org/javarosa"
//   xmlns:orx="http://openrosa.org/xforms"
//   xmlns:odk="http://www.opendatakit.org/xforms"
// >
//   <h:head>
//     <h:title>Basic PIN</h:title>

//     <model odk:xforms-version="1.0.0">
//       <!-- ================= INSTANCE ================= -->
//       <instance>
//         <data id="basic_form2">
//           <pin/>
//           <meta>
//             <instanceID/>
//           </meta>
//         </data>
//       </instance>

//       <!-- ================= I18N ================= -->
//       <itext>
//         <translation lang="ru" default="true()">
//           <text id="pin-label">
//             <value>ПИН</value>
//           </text>
//           <text id="pin-hint">
//             <value>Введите персональный идентификационный номер</value>
//           </text>
//           <text id="pin-error">
//             <value>Неверный формат ПИН</value>
//           </text>
//         </translation>

//         <translation lang="ky">
//           <text id="pin-label">
//             <value>ПИН</value>
//           </text>
//           <text id="pin-hint">
//             <value>Жеке идентификациялык номерди киргизиңиз</value>
//           </text>
//           <text id="pin-error">
//             <value>ПИН туура форматта эмес</value>
//           </text>
//         </translation>
//       </itext>

//       <!-- ================= BINDS ================= -->
//       <bind
//         nodeset="/data/pin"
//         type="string"
//         required="true()"
//         constraint="regex(/data/pin, '^[12](0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(19[0-9]{2}|20[0-9]{2})[0-9]{5}$')"
//         jr:constraintMsg="jr:itext('pin-error')"
//       />

//       <bind
//         nodeset="/data/meta/instanceID"
//         type="string"
//         readonly="true()"
//         jr:preload="uid"
//       />
//     </model>
//   </h:head>

//   <!-- ================= UI ================= -->
//   <h:body>
//     <input ref="/data/pin">
//       <label ref="jr:itext('pin-label')"/>
//       <hint ref="jr:itext('pin-hint')"/>
//     </input>
//   </h:body>
// </h:html>`;

// const res = await transform({
//   xform,
// });
// import "./my-element.ts";
import "./index.css";
console.log(1 + 1);
