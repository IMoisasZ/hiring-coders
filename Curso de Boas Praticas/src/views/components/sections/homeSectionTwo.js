import ImgSectionTwo from '../../../assets/images/background/starwars.jpg';
import darthVader from '../../../assets/images/elements/darth_veider.png';
import footer from '../footer';
import EstrelaMorte from '../footer'

let TextContent = `
    Lucas ipsum dolor sit amet solo solo hutt mara darth dooku k-3po windu windu jinn. 
    Anakin solo skywalker antilles leia mon fett luke darth. 
    Ackbar ponda wedge darth owen ben maul. 
    Bothan c-3po ackbar ponda solo ackbar yavin organa vader. 
    Vader darth tusken raider moff r2-d2 kenobi jango. 
    Chewbacca skywalker kenobi skywalker. 
    Mara kenobi mandalore jango. 
    Lando mandalorians amidala skywalker darth luuke. 
    Darth organa mothma hoth ackbar ben. 
    Solo calrissian palpatine chewbacca darth hutt hutt lando.
`

let HomeSectionTwo = `
    <section class="section imgSectionTwo" style=background-image:url(${ImgSectionTwo})>
       <div class="block-section--two">
            <img src="${darthVader}" alt="Vader" width="300px" heigth="auto">
       </div>
       <div class="text-block--two">
        <p>${TextContent}</p>
       </div>
        ${footer}
    </section>
`
export default HomeSectionTwo