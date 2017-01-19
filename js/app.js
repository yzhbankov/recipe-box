/**
 * Created by Iaroslav Zhbankov on 19.01.2017.
 */
var recipes = [];
var RecipeBox = React.createClass({
    getInitialState: function () {
        return {
            recipes: recipes
        }
    },
    addRecipe: function (e) {
        e.preventDefault();
        this.setState({
            recipes: recipes.concat([{
                "name": 'Name', "ing": 'Ingridients'
            }])
        })
    },
    render: function () {
        return (
            <div>
                <div className='container'>Recipe Box</div>
                {this.props.recipes.map(function (item) {
                    <div>
                        <div>{item['name']}</div>
                        <div>{item['ing']}</div>
                    </div>
                })}
                <button className='btn btn-primary' onClick={this.addRecipe}>Add recipe</button>
            </div>
        )
    }
});

ReactDOM.render(
    <RecipeBox recipes={recipes}/>,
    document.getElementById('box')
);