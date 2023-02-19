// // import { useState } from "react";

// // export const Title=()=>{
// //     return(
// //         <div>
// //             <select name="" id="">
// //                 <option value="">select title</option>
// //             </select>
// //         </div>        
// //     );
// // };

// import { useState } from "react";
// import Select from "react-select";
// // import { AppHeader } from "./compornent/AppHeader";
// // import { Title } from "./compornent/Title";
// // import { CheatSheetTable } from "./compornent/CheatSheetTable";
// // import { AddButtonAndModal } from "./compornent/AddButtonAndModal";

// export const App=()=>{
// const [showTable,setShowTable]=useState(false);

// const options=[
//     {value:"initial",label:"select title"},
//     {value:"example",label:"example"},
// ]

// const onChageTitle=()=>{
//     setShowTable(true);
// };

// const AppHeader=()=>{
//     return(
//         <div>
//             <header>
//             your cheat sheet
//             </header>
//         </div>
//     );
// };

// const Title=()=>{
//     const [selectTitle,setSelectTitle]=useState([0]);
//     return(
//         <div>
//             <Select 
//                 options={options}
//                 defaultValue={selectTitle}
//                 onChange={onChageTitle}
//             />
//         </div>        
//     );
// };

// const AddButtonAndModal=()=>{
//     return(
//         <button>追加</button>
//     );
// };

// const CheatSheetTable=()=>{
//     return(
//         {
//             if(showTable){
//                 <table>
//                     <tr>
//                         <th>Cheat</th>
//                         <th>Explain</th>
//                     </tr>
//                     <tr>
//                         <td>get</td>
//                         <td>データを取得</td>
//                     </tr>
//                 </table>
//             }
//         }
//     );
// };

//     return(
//         <div>
//             <AppHeader/>
//             <Title/>
//             <AddButtonAndModal/>
//             <CheatSheetTable/>
//         </div>
//     );
// };