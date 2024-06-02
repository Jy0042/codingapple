export default function Modal(props) {
  return (
    <>
      <div className="modal" style={{ backgroundColor: props.color }}>
        <h4>{props.title[props.modalTitle]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button
        // onClick={() => {
        //   props.setTitle((prevTitle) => {
        //     const newTitle = [...prevTitle];
        //     newTitle[0] = "여자 옷 추천";
        //     return newTitle;
        //   });
        // }}
        >
          글 수정
        </button>
      </div>
    </>
  );
}
