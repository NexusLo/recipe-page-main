import './styles.css'
import omelette from '../../assets/images/image-omelette.jpeg'
export default function Landing (){
    return (
        <div className='wrapper'>
            <div className='color-div'>
                <div className='main-div'>
                    <div className='img-div'>
                        <img src={omelette}
                            alt='omelette'
                            className='imgEgg'
                        />
                    </div>
                    <div className='head-div'>
                        <h1 className='title'>Simple Omelette Recipe</h1>
                        <p className='rcpdesc'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, 
                            optionally filled with your choice of cheese, vegetables, or meats.</p>
                    </div>
                    <div className='prep-div'>
                        <h2 className='subtitle1'>Preparation time</h2>
                        <ul>
                            <li className='liste text'><strong>Total</strong>: Approximately 10 minutes</li>
                            <li className='liste text'><strong>Preparation</strong>: 5 minutes</li>
                            <li className='liste text'><strong>Cooking</strong>: 5 minutes</li>
                        </ul>
                    </div>
                    <div className='ul-div'>
                    <h2 className='subtitle2'>Ingredients</h2>
                        <ul>
                            <li className='ingliste text'>2-3 large eggs,</li>
                            <li className='ingliste text'>Salt, to taste</li>
                            <li className='ingliste text'>Pepper, to taste</li>
                            <li className='ingliste text'>1 tablespoon of butter or oil</li>
                            <li className='ingliste text'>Optional filings: cheese diced vegetables, cooked meats, herbs</li>  
                        </ul>
                    </div>
                    <div className='lg-border'></div>
                    <div className='ol-div'>
                    <h2 className='subtitle2'>Instructions</h2>
                        <ol className='olr'>
                            <li className='olliste text'><strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper 
                                until they are well mixed. You can add a tablespoon of water or milk for a fluffier liste texture.</li>
                            <li className='olliste text'><strong>Heat the pan</strong>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                            <li className='olliste text'><strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs. 
                                Tilt the pan to ensure the eggs evenly coat the surface.</li>
                            <li className='olliste text'> <strong>Add fillings (optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the middle,
                                 sprinkle your chosen fillings over one half of the omelette. </li>
                            <li className='olliste text'><strong>Fold and serve</strong>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings.
                                 Let it cook for another minute, then slide it onto a plate.</li>
                            <li className='olliste text'><strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.</li>   
                        </ol>
                    </div>
                    <div className='lg-border'></div>
                    <div className='macro-div'>
                    <h2 className='subtitle2'>Nutrition</h2>
                    <p className='macrodesc text'> The table below shows nutritional values per serving without the additional fillings.</p>
                    <ul>
                            <li className='table-div nutliste text'>Calories <span className='pad-left1'>277kcal</span></li>
                            <div className='nut-border'></div>
                            <li className='table-div nutliste text'>Carbs <span className='pad-left2'>0g</span></li>
                            <div className='nut-border'></div>
                            <li className='table-div nutliste text'>Protein <span className='pad-left3'>20g</span></li>
                            <div className='nut-border'></div>
                            <li className='table-div nutliste text'>Fat <span className='pad-left4'>22g</span></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}