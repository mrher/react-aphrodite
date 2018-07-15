import { StyleSheet } from 'aphrodite/no-important';
import {blackSquare} from './squareStyles';

export default StyleSheet.create({
        container: {
            background: '#ccc'
        },
        square: {
            ...blackSquare,
            width: '500px',
            height: '500px'
        }
})