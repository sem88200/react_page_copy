function Sample(){
        return(
               <>
                  <SkipComponent/>
                  <Header/>
                  <WrapComponent/>
                  <Footer/>
               </>
        )
}

// Skip
//extends 상속 받아라 =>리엑트 컴포넌트 내용을 스킵 컴포넌트에 상속받아라
class SkipComponent extends React.Component {
    render(){
   
        return (
            <>
                <ul className="skip">
                    <li><a href="#main">콘텐츠바로가기</a></li>
                </ul>
            </>
        );
    }
}


// Header
class Header extends React.Component {
    render(){
   
    
    return (
        <>

            <header>
            <h1><a href="#">SAMPLE</a></h1>
            </header>

        </>
    );
}
}



// Wrap
class WrapComponent extends React.Component {
    render(){
   
    
        return (
            <>

                    <MainComponent/>

            </>
        );
    }
}


	
	// main
class MainComponent extends React.Component {
    render(){
   

        return (
            <>
		
            <div id="menubox">
            <nav id="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">BRAND</a></li>
                    <li><a href="#">STORY</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            <div class="submenu">
                <div class="box">
                <ul>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                </ul>
                <ul>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                </ul>
                <ul>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                </ul>
                <ul>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                    <li><a href="#">LIST</a></li>
                </ul>
                </div>
            </div>
            </div>
           <section id="banner">
            <div><img src="img/p_main1.jpg" alt="ban" /></div>
            <div><img src="img/p_main1.jpg" alt="ban" /></div>
           </section>

			<section id="main">
                <h2>LIST</h2>
                <ul>
                    <li><a href="#"><img src="img/mpr1.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/mpr2.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/mpr3.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/mpr4.png" alt="1" /></a></li>
                </ul>
            </section>

            <section id="main1">
                <h2>LIST</h2>
                <ul>
                    <li><a href="#"><img src="img/ppr1.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/ppr2.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/ppr3.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/ppr4.png" alt="1" /></a></li>
                </ul>
            </section>

            <section id="ban1">
                <img src="img/p_bn.png" alt="bb" />
            </section>

            <section id="main2">
                <h2>LIST</h2>
                <ul>
                    <li><a href="#"><img src="img/ppr1.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/ppr2.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/ppr3.png" alt="1" /></a></li>
                    <li><a href="#"><img src="img/ppr4.png" alt="1" /></a></li>
                </ul>
            </section>


           
			
		   </>
        );
    }
}

// Footer
class Footer extends React.Component {
    render(){
   
    
    return (
        <>

           <footer>
                FOOTER
            </footer>
        </>
    );
}
}
	
	ReactDOM.render(
        <Sample/>,
        document.getElementById("root")
);
	