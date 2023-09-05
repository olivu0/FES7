// 콜라만들어서 화면에 뿌려준다
class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".cola-list");
  }

  // 콜라 객체 초기화
  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  // 콜라 관련 데이터를 로드함
  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (!response.ok) {
        throw new Error("HTTP ERROR! :" + response.status);
      }
      return await response.json();
    } catch (error) {
      console.error("콜라 데이터를 로딩하는 중에 문제가 발생했습니다. : " + error);
    }
  }

  // 콜라의 템플릿 코드
  colaFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      // data 속성 사용 (자판기 누르면 data 빼와야함) -> 문자열이어서 "${el.name}" 쌍따옴표 적어줌
      const itemTemplate = `
        <button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
          <img src="./img/${el.img}" alt="" />
          <span class="cola-name">${el.name}</span>
          <strong class="cola-price">${el.cost}원</strong>
        </button>`;
      item.innerHTML = itemTemplate;
      // fragment만들어서 거기다가 붙임
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator;
