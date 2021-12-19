// import styles from './index.less';
// import React, { Component } from 'react';
// import ReactToPrint from 'react-to-print';
// import Barcode from "./components/Barcode/index";

// export default function IndexPage() {
//   const componentRef = React.useRef(null);
//   const reactToPrintContent = React.useCallback(() => {
//     return componentRef.current;
//   }, [componentRef.current]);
//   return (
//     <div>
//       <div  ref={componentRef}>
//     <div style={{textAlign: 'center',color: 'red',fontSize: '40px',marginBottom: '10px',marginTop: '40px'}}>活动二维码</div>
//     <div style={{fontSize: '26px',textAlign: 'center'}}>活动标题</div>
//     <Barcode value="12345678" />
// </div>
// <button style={{ marginRight: 16,marginLeft: 30 }}  onClick={() => this.handleCancel()}>取消</button>

// <ReactToPrint
//     trigger={() => <a ><button >打印二维码</button></a>}
//     content={reactToPrintContent}
//     onAfterPrint={()=>{
//      console.log('打印成功！');
//     }}
//     onPrintError={(errorLocation: string, error: Error)=>{
//       console.log(errorLocation);
//       console.log(error);
//      }}
// />
//       <h1 className={styles.title}>Page index</h1>
     
//     </div>
//   );
// }
import * as React from "react";

import { ComponentToPrint } from "./demo";
import { useReactToPrint } from 'react-to-print';

export default function FunctionalComponentWithHook() {
  const componentRef = React.useRef(null);
  const onBeforeGetContentResolve = React.useRef<(() => void) | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    setLoading(true);
    setText("Loading new text...");

    return new Promise<void>((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: false,
  });

  React.useEffect(() => {
    if (text === "New, Updated Text!" && typeof onBeforeGetContentResolve.current === "function") {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  return (
    <div>
      {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}
      <button onClick={handlePrint}>
        Print
      </button>
      {/* <div ref={componentRef} >1111</div> */}
      <div style={{'display':'none'}} >
           <div ref={componentRef}>1111</div>
      </div>
    </div>
  );
};