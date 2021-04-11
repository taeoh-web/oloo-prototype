/*
 * Title: GentleWidght Obejct 
 * Author: KimTaeOh (taeoh.kim@gentlepie.com )
 * Date: 2021-04-03
 */
var GentleWidget = {
    init: function(elemWrap){
        this.$elem = (elemWrap)?elemWrap:$('<div>');
        if(this.componentPrefix && this.index){            
            this.setId();                        
        }
    },    
    insert: function($where){
        $where = $where || $(document.body);
        if ( this.$elem ){
            this.$elem.clone(true).appendTo($where);
            this.$elem = $("#" + this.getId());
        }
    },
    getIndex: function(){
        if(this.index === undefined){
            this.index = 1;
        }else {
            this.index = this.index + 1;
        }
    },
    setPrefix: function(prefix){
        this.componentPrefix = prefix;
    },
    setId: function(){                
        this.$elem.attr('id', this.componentPrefix + '-' + this.index);
        return this.componentPrefix + '-' + this.index;
    },
    setEvent: function(eventListner, callback){
        this.$elem.bind(eventListner, callback);
    },
    append: function(data){
        this.$elem.append(data);
    },
    html: function(data){
        this.$elem.html(data);
    },
    getVal: function(){
        return this.$elem.val();
    },
    getId: function(){        
        return this.componentPrefix + '-' + this.index;
    }
}


/*
 * Button 객체 
 * Author : KimTaeOh
 * Date : 2021-04-03
 */
var GentleButton = Object.create( GentleWidget );
GentleButton.createButton = function(option){
    this.setPrefix('button');
    this.getIndex();
    this.option = option;
    this.title = this.option.title;
    delete this.option.title;
    if( !this.title ) throw new Error('버튼 텍스트는 필수요소입니다');
    this.init($( "<button>", this.option ));    
    this.$elem.text( this.title );
}

/*
 * Input 객체 
 * Author : KimTaeOh
 * Date : 2021-04-03
 */
var GentleInput = Object.create( GentleWidget );
GentleInput.createInput = function(option){
    this.setPrefix('input');
    this.getIndex();
    this.option = option;
    this.init( $( "<input />", this.option ) );
}

/*
 * Password 객체 
 * Author : KimTaeOh
 * Date : 2021-04-03
 */
var GentlePassword = Object.create( GentleWidget );
GentlePassword.createPassword = function(option){
    this.setPrefix('passwd');
    option.type = 'password';
    this.option = option;
    this.getIndex();
    this.init($( "<input />", this.option = option ));
}



/*
 * CustomService 객체 ( 실질적인 서비스를 구현 ) 
 * Author : KimTaeOh ( taeoh.kim@gentlepie.com )
 * Date : 2021-04-03
 */
var GentleCustomService = Object.create( GentleWidget );
GentleCustomService.login = function(){
                        
    // 아이디 
    var input = Object.create( GentleInput );   
    input.createInput({
        'id': 'gentle-input-id',
        'class': 'gentle-input-class required',
        'name': 'user_id',
    });
    input.insert();
    
    // 비밀번호
    var passwd = Object.create( GentlePassword );
    passwd.createPassword({
        'class': 'gentle-password-class required',
        'name': 'user_pw',
    });
    passwd.insert();

    // 로그인버튼 
    var btn = Object.create( GentleButton ); 
    btn.createButton({
        'title' : '로그인',
        'class' : 'gentle-button-class required'
    });
    

    // 로그인 버튼에 이벤트를 바인딩합니다 
    btn.setEvent('click',function(){     
        var user_id = input.getVal();
        var user_pw = passwd.getVal();
        alert( '로그인 >> ' + user_id + ' >> ' + user_pw);
    });    
    btn.insert();

}