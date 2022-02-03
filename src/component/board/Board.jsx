
import './Board.css';
import { Cell } from '../Cell/Cell';

export const Board = () => {
    return (
        
            <div id="board">
                <Cell value="X" canHighlight={true} />
                <Cell value="X" canHighlight={true}/>
                <Cell value="X" canHighlight={true} />
                <Cell value="O" canHighlight={false} />
                <Cell value="O" canHighlight={false} />
                <Cell value="X" canHighlight={false} />
                <Cell value="O" canHighlight={false} />
                <Cell value="" canHighlight={false} />
                <Cell value="" canHighlight={false} />    
            </div>
    );
}

