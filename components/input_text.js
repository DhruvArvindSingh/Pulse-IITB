
// import "./css/input_text.css"; 
export default function Input_box(
    {
        Label,
        Placeholder,
        Type,
        Name,
        Value,
        setValue,
        stylee="",
        label_style="",
        input_style="",
    }
){
    return(
        <>
        {/* <div>Input Box Component</div> */}
        <div style={{stylee}}>
            <div style={{label_style}}>
            <Label >{Label}</Label>
            </div>
            <input style={{input_style}} type={Type} id={Name} name={Name} placeholder={Placeholder} value={Value} onChange={(e) => setValue(e.target.value)} />
        </div>
        </>
    )
    
}