/**
 * Created by Iaroslav Zhbankov on 19.01.2017.
 */

var RecipeBox = React.createClass({
    render: function(){
        return(
            <div className='container'>Container</div>
        )
    }
});

ReactDOM.render(
    <RecipeBox />,
    document.getElementById('box')
);