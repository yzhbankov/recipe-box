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

function AddRecipe() {
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                One fine body...
            </Modal.Body>
            <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>)
}

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
                        ? <AddRecipe />
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
