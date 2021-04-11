## OLOO-PROTOTYPE

OLOO 스타일로 작성한 UI 컴포넌트 생성 프로토타입입니다   
ValiaJS / this 객체 바인딩 / 프로토타입링크에 대한 지식을 필요로 합니다   
Jquery 사용은 지양하지만 DOM 조작에서는 적극 활용했습니다   

### OLOO ( Objects Linked to Other Objects ) 란 ? 
프로토타입을 이용한 상속개념에서 벗어나 객체와 객체를 동등한 위치로 보고,    
특정 객체에서 정의된 기능은 해당 객체로 위임해서 사용합니다     
이때 this바인딩은 암시적으로 호출객체를 가르키므로 모든 동작이 매끄러우며 객체의 기능은 명확합니다     
      
위 개념은 You Dont Know JS (심슨카일)에서 소개했으며 이 예제에서 적극적으로 사용되었습니다    

### OLOO WIDGET 소개 
이 예제는 총 5개의 객체가 사용됩니다 
- GentleWidght : 위젯의 공통적인 기능을 정의합니다 
- GentleButton : Button과 관련된 기능을 정의합니다 
- GentleInput : Input과 관련된 기능을 정의합니다 
- GentlePassword : Password와 관련된 기능을 정의합니다 
- GentleCustomService : 위 객체를 이용해서 실질적인 기능을 정의합니다 

Gentle은 크게 신경쓰지 마세요 현재 몸담고 있는 회사와 연관있는 Prefix입니다 

이 객체들은 모두 프로토타입링크로 연결된 동등관계 입니다   
프로토타입을통한 오버라이딩은 사용하지 않습니다   
내가 필요한 기능은 객체수색을 통해 작업을 위임하며 호출한 객체가 this 바인딩 되어 상태를 변경합니다 

### 어플리케이션 개발 
위 예제에서는 간단한 로그인 폼을 구현하는 서비스를 구현해 보았습니다 
일반적으로 실제 어플리케이션은 이보다 요구사항이 더 방대하고 복잡합니다    
아래는 실제 서비스를 개발한다고 가정하고 현재 프로토타입을 좀더 고도화해 보았습니다 

https://github.com/taeoh-dev/oloo-prototype-with-webpack