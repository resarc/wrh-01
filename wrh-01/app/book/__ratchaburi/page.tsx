import Reader from '@/app/components/Reader'

export default function Ratchaburi() {
  const info =
  <div>
  <p><b>สมุดราชบุรี</b></p>
  <p>ฉบับพิมพ์ครั้งที่ 1 พ.ศ. 2468 </p>
  <br />
  <p>
  หนังสือของมณฑลราชบุรี เพื่อประกอบหอจัดแสดงงานในงานสยามรัฐพิพิธภัณฑ์ ว่าด้วยรายละเอียดของมณฑลราชบุรี ตั้งแต่ประวัติความเป็นมา ภูมิประเทศ จังหวัดต่างๆ ภายในมณฑล ได้แก่ ราชบุรี เพชรบุรี ประจวบคีรีขันธ์ กาญจนบุรี สมุทรสงคราม ตลอดจนข้อมูลเกี่ยวกับพลเมือง ชาติพันธุ์ต่างๆ ทรัพยากรท้องถิ่น และสถานที่ท่องเที่ยวที่น่าสนใจ 
  </p>
  <br />
  <p><b>Ratchaburi Register</b></p>
  <p>First Edition, 1926</p>
  <br/>
  <p>
  The Ratchaburi Register was created as a provincial reference for the Siamese Kingdom Exhibition. This edition meticulously details the Monthon Ratchaburi (Ratchaburi Circle) — which encompasses provinces such as Ratchaburi, Phetchaburi, Prachuap Khiri Khan, Kanchanaburi, and Samut Songkhram —, tracing its historical origins and geographical characteristics. It also highlights distinctive features, ranging from its diverse populace and ethnic communities to its abundant local resources, as well as significant landmarks and attractions.
  </p>
  </div>

  return(
    <>
      <Reader file="/pdf/Ratchaburi.pdf" info={info} />
    </>
  )
}