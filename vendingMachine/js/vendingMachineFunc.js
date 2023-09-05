class VendingMachineFunc {
  constructor() {
    // 필요한 ui 가져오는 작업할 것
    // section1 요소 선택
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p"); // 잔액
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money"); // input 창
    this.btnPut = vMachine.querySelector("#input-money+.btn"); // 입금 버튼
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get"); // 획득 버튼
    this.stagedList = vMachine.querySelector(".get-list");

    // section2 요소 선택
    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box p");

    // section3 요소 선택
    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  setup() {
    this.bindEvents();
  }

  // 장바구니
  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
      <img src="./img/${target.dataset.img}" alt="" />
      ${target.dataset.item}
      <strong>
        1
        <span class="a11y-hidden">개</span>
      </strong> 
      `;
    this.stagedList.append(stagedItem);
  }

  // 이벤트를 붙인다
  bindEvents() {
    // 1. 입금 버튼 기능
    // 입력된 금액을 소지금에서 입력된 금액만큼 빠져야한다
    // 소지금 === 소지금 - 입금액
    // 잔액은 입력된 금액만큼 더해져야함
    // 잔액 === 잔액 + 입금액
    // 입금액이 소지금보다 많으면 예외 처리 '소지금이 부족합니다'라는 경고창 띄움
    // 입금액 input창은 초기화 되어야함

    this.btnPut.addEventListener("click", (event) => {
      const inputCost = parseInt(this.inputCostEl.value); // 입금액(사용자 입력값)
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 소지금(사용자의 돈)
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 잔액(자판기 잔액)

      // 입금을 눌렀는데 입금액이 없으면 eventListener 작동하면 안됨
      // 입금액이 있고 소지금보다 적거나 같다면, 사용자의 값이 truthy 일때만 작동 0 flasy
      if (inputCost) {
        if (myMoneyVal >= inputCost && inputCost > 0) {
          // Intl 객체 실행 -> 화폐단위도 바껴서 지원 -> 23000이아니라 23,000 이렇게 나옴
          // Intl 객체를 통해 사용자 국가에서 사용하는 포맷으로 숫자를 변경한다
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";

          // balanceVal 초기화 << 오류 처리
          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + "원";
        } else {
          alert("소지금이 부족합니다!");
        }
        // 사용자가 입력한 입금액을 초기화 한다
        this.inputCostEl.value = "";
      }
    });

    // 2. 거스름돈 반환 버튼 기능
    // 잔액이 초기화되고
    // 소지금이 잔액만큼 늘어나야 한다 === 소지금 + 잔액

    this.btnReturn.addEventListener("click", () => {
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 소지금(사용자의 돈)
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 잔액(자판기 잔액)

      if (balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal + balanceVal) + "원";

        this.balance.textContent = "";
      }
    });

    // 3. 자판기 메뉴 기능
    // 콜라를 누르면 잔액 === 잔액 - 콜라 가격
    // 콜라가격보다 잔액이 적다면 '잔액이 부족합니다' 경고창 출력
    // 콜라가 장바구니에 등록되야함
    // 콜라의 data-count 값을 -1 한다
    // 만약 data-count값이 0이라면 button 요소에 disabled 속성이 추가되고, 콜라 템플릿에  strong 태그가 추가되어야 한다.

    const colaBtns = this.itemList.querySelectorAll("button");
    console.log(colaBtns);
    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener("click", (event) => {
        // 현재 잔액
        const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));
        // 클릭한 콜라의 가격
        const targetElPrice = parseInt(colaBtn.dataset.price);

        const stagedListItem = this.stagedList.querySelectorAll("li");

        let isStaged = false;

        // 잔액이 콜라 가격보다 많거나 동일하다면
        if (balanceVal >= targetElPrice) {
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          // 선택한 콜라가 이미 장바구니에 존재한다면
          for (const item of stagedListItem) {
            if (item.dataset.item === colaBtn.dataset.item) {
              const itemTxt = item.querySelector("strong");
              // 장바구니 콜라의 카운트를 1 증가
              itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              break;
            }
          }

          // 만약 처음 선택한 콜라라면 선택한 콜라를 장바구니에 넣기
          if (!isStaged) {
            this.stagedItemGenerator(colaBtn);
          }
          colaBtn.dataset.count--;

          // 만약 콜라의 카운트가 0이라면 button 요소에 disable
          if (parseInt(colaBtn.dataset.count) === 0) {
            colaBtn.disabled = "disabled";
            colaBtn.insertAdjacentHTML("afterbegin", '<strong class="soldout">품절</strong>');
          }
        } else {
          alert("잔액이 부족합니다! 돈을 더 입금해주세요!");
        }
      });
    });

    // 4. 획득 버튼 기능
    // 획득 버튼을 누르면 선택한 음료수 목록이 음료 목록으로 이동한다
    // 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트 한다

    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li");
      const itemGetList = this.getList.querySelectorAll("li");
      let totalPrice = 0;

      // 장바구니 아이템을 획득목록으로 이동하기
      this.getList.append(...itemStagedList);

      for (const itemStaged of itemStagedList) {
        let isStaged = false;
        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득리스트가 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            const itemTxt = itemGet.querySelector("strong");
            // 획득목록의 콜라의 카운트를 고른 갯수만큼 증가
            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + parseInt(itemStaged.querySelector("strong").firstChild.textContent);
            isStaged = true;
            break;
          }
        }
        if (!isStaged) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 비우기
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });
      this.txtTotal.textContent = `${new Intl.NumberFormat().format(totalPrice)} 원`;
    });
  }
}

export default VendingMachineFunc;

// 버튼 눌렀을 때의 event
// 입금 -> 입금액에 입력을 하고 입금버튼을 누르면
// 입금 버튼에 이벤트 달아야함

// 기능구현하려면 dom에 접근해야함
// 버튼 필요, 입력창 필요, 잔액(입급액이 잔액으로 들어가야함)창 필요
