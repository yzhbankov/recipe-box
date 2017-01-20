/**
 * Created by Iaroslav Zhbankov on 19.01.2017.
 */
var recipes = [{"recipe": 'soup', "ingridients": 'onion, potato, wather'}, {
    "recipe": 'salad',
    "ingridients": 'onion, cabbage, carrot'
}];
var Collapse = ReactBootstrap.Collapse;
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormControl = ReactBootstrap.FormControl;
var ControlLabel = ReactBootstrap.ControlLabel;
var Recipe = React.createClass({
    getInitialState: function () {
        return {
            state: {}
        }
    },
    getList: function (list) {
        const ingr = list.split(',');
        const ingrList = [];
        for (var i = 0; i < ingr.length; i++) {
            ingrList.push(<li className="list-group-item">{ingr[i]}</li>);
        }
        return (
            ingrList
        )
    },
    render: function () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={ ()=> this.setState({ open: !this.state.open })}>{this.props.recipe.recipe}</a>
                        </h4>
                    </div>
                    <Collapse in={this.state.open}>
                        <div>
                            <ul className="list-group">
                                {
                                    this.getList(this.props.recipe.ingridients)

                                }
                            </ul>
                            <Button bsStyle="danger">Delete</Button>
                            <Button>Edit</Button>
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }
});

var RecipeBox = React.createClass({
    getInitialState: function () {
        return {
            recipes: recipes,
            childVisible: false
        }
    },
    addRecipe: function () {
        this.setState({childVisible: !this.state.childVisible})
    },
    addIngridients: function () {
        var recipeTitle = $("#recipeTitle").val();
        var ingidients = $("#ingridients").val();
        recipes.push({"recipe": recipeTitle, "ingridients": ingidients});
        this.setState({
            childVisible: !this.state.childVisible,
            recipes: recipes
        })
    },
    render: function () {
        const recipesList = [];
        for (var i = 0; i < recipes.length; i++) {
            recipesList.push(<Recipe recipe={recipes[i]}/>)
        }
        return (
            <div>
                <div className='container'>Recipe Box</div>
                {recipesList}
                <Button onClick={this.addRecipe} bsStyle="primary">Add Recipe</Button>
                {
                    this.state.childVisible
                        ? <Modal.Dialog>
                        <Modal.Body>
                            <form>
                                <ControlLabel>Recipe title</ControlLabel>
                                <FormControl
                                    type="text"
                                    id='recipeTitle'
                                    placeholder="Enter recipe title"
                                    />
                                <ControlLabel>Ingridients</ControlLabel>
                                <FormControl
                                    type="text"
                                    id='ingridients'
                                    placeholder="Enter the ingridients throught coma"
                                    />
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.addRecipe}>Close</Button>
                            <Button onClick={this.addIngridients} bsStyle="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                        : null
                }
            </div>

        )
    }
});


ReactDOM.render(
    <RecipeBox recipes={recipes}/>,
    document.getElementById('box')
);
