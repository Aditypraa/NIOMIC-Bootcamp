export const Perkenalan = (props) => {
  const handleClick = (nama) => {
    console.log("Click" + nama);
  };

  return (
    <div>
      <div>Nama saya adalah {props.nama}</div>
      <div>hooby saya adalah {props.hoby}</div>
      <button onClick={() => handleClick(props.nama)}>Klik Ini</button>
    </div>
  );
};
