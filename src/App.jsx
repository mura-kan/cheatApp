import { useState } from "react";
import Select from "react-select";
import { useRef } from "react";

export const App=()=>{
    // テーブルの表示ステート
    const [showTable,setShowTable]=useState(false);

    // プルダウンステート
    const [options,setOptions]=useState([
        {value:"initial",label:"select title"},
        {value:"example",label:"example"},
    ]); 

    // プルダウン内のタイトルステート
    const [selectTitle,setSelectTitle]=useState(options[0]);

    // タイトル追加画面ステート
    const [addTitleModal,setAddTitleModal]=useState(false);

    // チート追加画面ステート
    const [addCheatModal,setAddCheatModal]=useState(false);

    // テーブルが表示されているかどうかで表示する追加画面を変える
    const onClickModal=()=>{
        if(showTable){
            // テーブルが表示されていたらチート追加画面を表示
            setAddCheatModal(true);
            // console.log(changeTable());
        }else{
            setAddTitleModal(true);
        };
    };

    const addTitle=useRef(null);

    // タイトル追加画面で「追加ボタン」を押した場合、その入力されたタイトルをプルダウンに追加する
    const onClickTtitle=()=>{
        if(addTitleModal){
            if(!addTitle.current) return;
            // 取得した入力欄のvalueで新たなオブジェクトを生成
            const newOptions={value:addTitle.current.value,label:addTitle.current.value};
            // プルダウンに新たなオブジェクトを追加
            setOptions((prevState)=>[...prevState,newOptions]);
            // タイトル追加画面を非表示にする
            setAddTitleModal(false);
            alert("タイトルを追加しました");
        }else if(addCheatModal){
            setAddCheatModal(false);
        };
    };

    // ヘッダーをクリックすると初期表示に戻る
    const onClickHeader=()=>{
        // テーブルを非表示に
        setShowTable(false);
        // プルダウンを初期状態に
        selectTitle(options[0]);
    };

    // チートテーブルステート
    const [cheatTable,setCheatTable]=useState([
        {title:null,cheat:null,table:null}
    ]);

    // チート追加画面の入力値を初期化
    const newCheat=useRef(null);
    const newExplain=useRef(null);
    const newTitle=useRef(null);

    // チート追加画面で「追加ボタン」を押した場合、その入力されたチートをオブジェクトに追加する
    const onClickCheat=()=>{
        // 入力欄がnullでないことを確かめる
        if(!newCheat.current && !newExplain.current && !newTitle.current) return;
        // 取得した入力欄のvalueで新たなオブジェクトを生成
        const newCheatTable={title:newTitle.current.value,cheat:newCheat.current.value,explain:newExplain.current.value};
        // プルダウンに新たなオブジェクトを追加
        setCheatTable((prevState)=>[...prevState,newCheatTable]);
        // タイトル追加画面を非表示にする
        setAddCheatModal(false);
        alert("チートを追加しました");
        console.log(newTitle.current.value);
        console.log([...cheatTable]);
        console.log(newCheatTable);
    };

    // プルダウン内のタイトルによって、テーブルの表示を変える
    const onChageTitle=(e)=>{
        if(e.target.value==="initial"){
            // 「選択してください」の場合テーブルを非表示 
            setShowTable(false);
        }else{
            //initial以外からinitial以外にプルダウンを変更したとき、レンダリングが起きるように下記を追加
            // (コンポーネントごとにファイルを分けた時、再度調整2023/2/19)
            setCheatTable((prevState)=>[...prevState,0]);
            // changeTable();
            setShowTable(true);
            // console.log(changeTable());
        };
        console.log(e.target.value);
        console.log(newTitle.current.value);
    };

    return(
        <div>
            <header onClick={onClickHeader}>
            your cheat sheet
            </header>
            <div>
            <select name="title" onChange={onChageTitle} ref={newTitle}> 
                {
                    // プルダウンステートの配列を全て表示
                    options.map((option)=>(
                        <option value={option.value} 
                        defaultValue={selectTitle[0]}
                        // ref={newTitle}
                        >{option.label}</option>
                    ))
                }
            </select>
            </div>

            <button onClick={onClickModal}>追加</button>
            
            {showTable ? 
            <table>
                <tr>
                    <th>Cheat</th>
                    <th>Explain</th>
                </tr>
                {
                cheatTable.filter((cheatTables)=>cheatTables.title==newTitle.current.value)
                .map((cheatTables)=>(
                <tr>
                    <td>{cheatTables.cheat}</td>
                    <td>{cheatTables.explain}</td>
                </tr>
                ))}
            </table>
             : null}

            {
                addTitleModal ? <><table>
                    <tr>
                        <th>title</th>
                    </tr>
                    <tr>
                        <td><input ref={addTitle} type="text" /></td>
                    </tr>
                </table>
                <button onClick={onClickTtitle}>登録</button>
                </> : null
            }
            {
                addCheatModal ? <><table>
                    <tr>
                        <th>cheat</th>
                        <td><input type="text" ref={newCheat}/></td>
                    </tr>
                    <tr>
                        <th>explain</th>
                        <td><input type="text" ref={newExplain}/></td>
                    </tr>
                </table>
                <button onClick={onClickCheat}>登録</button>
                </> : null
            }
        </div>
    );
};