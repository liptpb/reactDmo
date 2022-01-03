
import * as React from "react";

// import { ComponentToPrint } from "./demo";
// import { useReactToPrint } from 'react-to-print';

// export default function FunctionalComponentWithHook() {
//   // FileSystemObject可以随便修改用户电脑中的文件，在客户端使用非常不安全，一般客户端浏览器都是禁止使用的。 只有在hta网页应用程序中或者在服务器端才允许使用
//   const handlePrint = () =>{
//     console.log('1111')
//     var fso = new ActiveXObject("Scripting.FileSystemObject");
//     // var f1 = fso.createtextfile("E:\\myjstest.txt",true)
//     var xmlHttp
//       //判断浏览器是否支持ActiveX控件
//       if(window.ActiveXObject){
//         console.log('yse')
//         //支持-通过ActiveXObject的一个新实例来创建XMLHttpRequest对象
//         console.log('yse')
//         xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//       }
//       //不支持
//       else if(window.XMLHttpRequest){
//         console.log('no')
//         xmlHttp = new XMLHttpRequest()
//       }
//   }



//   return (
//     <div>
//       <button onClick={handlePrint}>
//         Print
//       </button>
//     </div>
//   );
// };
interface Props {
  
}
 
const aaa = () => {
  const handleSubmit = () => {
    console.log(this.refs.input.value)   //方法一
  
  }
  return ( 
    <div>
        <input
                    type='text'
                    ref='input' defaultValue="Hello" />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                //方法二
                 <input
                    type='text'
                    ref={(val) => this.inputdata = val} defaultValue="Hello" />
    </div>
   );
}
 
export default aaa;