const blockSize = 55;
const gridSize = 6;

const maps = {
    '2024-07-21': {
        blocks: [
            {id: 1, x: 0, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 1, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 0, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 4, x: 0, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 6, x: 3, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 4, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 8, x: 5, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 9, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 10, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 3, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-22': {
        blocks: [
            {id: 1, x: 0, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 2, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 1, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 4, x: 3, y: 2, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 5, x: 4, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 1, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 3, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 4, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 2, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-23': {
        blocks: [
            {id: 1, x: 0, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 1, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 2, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 4, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 6, x: 3, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 7, x: 0, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 3, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 10, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-24': {
        blocks: [
            {id: 1, x: 1, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 2, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 4, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 0, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 7, x: 0, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 1, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 3, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 2, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-25': {
        blocks: [
            {id: 1, x: 0, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 2, x: 4, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 1, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 5, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 3, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 2, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 0, y: 3, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 4, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 11, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-26': {
        blocks: [
            {id: 1, x: 0, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 1, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 4, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 0, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 3, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 3, y: 5, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 1, y: 1, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 11, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-27': {
        blocks: [
            {id: 1, x: 2, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 4, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 5, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 3, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 1, y: 0, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 3, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 11, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-28': {
        blocks: [
            {id: 1, x: 1, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 4, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 5, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 0, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 7, x: 2, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 0, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 0, y: 5, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 11, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-29': {
        blocks: [
            {id: 1, x: 0, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 2, y: 2, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 4, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 6, x: 3, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 7, x: 1, y: 1, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 3, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 0, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 0, y: 5, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-30': {
        blocks: [
            {id: 1, x: 0, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 1, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 2, y: 2, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 4, x: 5, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 5, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 7, x: 3, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 2, y: 1, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 0, y: 5, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 11, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-07-31': {
        blocks: [
            {id: 1, x: 2, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 4, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 5, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 1, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 7, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 0, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 3, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 2, y: 5, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-01': {
        blocks: [
            {id: 1, x: 0, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 2, x: 0, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 3, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 3, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 3, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 11, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-02': {
        blocks: [
            {id: 1, x: 1, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 0, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 4, x: 5, y: 2, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 5, x: 4, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 6, x: 2, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 4, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 1, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 3, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 2, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 2, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-03': {
        blocks: [
            {id: 1, x: 0, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 0, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 1, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 3, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 2, y: 3, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 3, y: 0, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 4, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-04': {
        blocks: [
            {id: 1, x: 0, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 1, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 3, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 4, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 2, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 5, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 7, x: 4, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 3, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 1, y: 3, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 10, x: 1, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-05': {
        blocks: [
            {id: 1, x: 0, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 1, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 4, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 6, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 7, x: 2, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 1, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 2, y: 1, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-06': {
        blocks: [
            {id: 1, x: 0, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 0, y: 3, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 3, x: 1, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 4, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 3, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 4, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 7, x: 5, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 8, x: 0, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 3, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-07': {
        blocks: [
            {id: 1, x: 0, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 2, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 3, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 4, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red'},
            {id: 5, x: 5, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 1, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 2, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 0, y: 3, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 2, y: 4, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 10, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    },
    '2024-08-08': {
        blocks: [
            {id: 1, x: 1, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 2, x: 2, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 3, x: 3, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 4, x: 5, y: 2, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 5, x: 1, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 6, x: 2, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red'},
            {id: 7, x: 2, y: 0, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 8, x: 4, y: 1, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 9, x: 2, y: 3, width: 3, height: 1, direction: 'horizontal', color: 'green'},
            {id: 10, x: 4, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 11, x: 0, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green'},
            {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal', color: 'blue'},
        ],
        key: {id: 12, x: 0, y: 2, width: 2, height: 1, direction: 'horizontal'},
        exitPosition: {x: 6, y: 2}
    }
};

let selectedBlock = null;
let startX = 0;
let startY = 0;
let hasWon = false;
let blocks = [];
let key = {};
let exitPosition = {};
let timeLeft = 29;

const refreshButton = document.getElementById('refreshButton');
const timerButton = document.getElementById('timerButton');
let countdown;

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function initGrid(date) {
    const map = maps[date];
    if (!map) {
        console.error('Карта для данной даты не найдена!');
        return;
    }

    blocks = map.blocks;
    key = map.key;
    exitPosition = map.exitPosition;

    grid.innerHTML = '';

    blocks.forEach(block => {
        const div = document.createElement('div');
        div.classList.add(block.id === key.id ? 'key' : 'block', block.color);
        div.classList.add(block.direction);
        div.style.width = `${block.width * blockSize}px`;
        div.style.height = `${block.height * blockSize}px`;
        div.style.transform = `translate(${block.x * blockSize}px, ${block.y * blockSize}px)`;
        div.dataset.id = block.id;
        const childDiv = document.createElement('div');
        childDiv.classList.add('block-child');

        if (document.body.classList.contains('hamster-theme')) {
            childDiv.innerHTML = '';
        } else {
            childDiv.innerHTML = block.id === key.id ? '🔑' : '';
        }
        div.appendChild(childDiv);

        grid.appendChild(div);
    });

    const exit = document.createElement('div');
    exit.classList.add('exit');
    exit.style.transform = `translate(${exitPosition.x * blockSize}px, ${exitPosition.y * blockSize}px)`;
    exit.innerHTML = '🚪';
    grid.appendChild(exit);
}

function addEventListeners() {
    function onStart(e) {
        const blockElement = e.target.closest('.block, .key');
        if (blockElement) {
            selectedBlock = blocks.find(b => b.id === parseInt(blockElement.dataset.id));
            const rect = blockElement.getBoundingClientRect();
            startX = (e.clientX || e.touches[0].clientX) - rect.left;
            startY = (e.clientY || e.touches[0].clientY) - rect.top;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('touchmove', onMove, {passive: false});
            document.addEventListener('mouseup', onEnd);
            document.addEventListener('touchend', onEnd);
        }
    }

    function onMove(e) {
        e.preventDefault();
        if (selectedBlock) {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            moveBlockWithMouse(clientX, clientY);
        }
    }

    function onEnd() {
        if (selectedBlock) {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchend', onEnd);
            selectedBlock = null;
        }
    }

    grid.addEventListener('mousedown', onStart);
    grid.addEventListener('touchstart', onStart, {passive: false});
}

function getMousePosition(e) {
    const mouseX = (e.clientX || e.touches[0].clientX) - grid.getBoundingClientRect().left;
    const mouseY = (e.clientY || e.touches[0].clientY) - grid.getBoundingClientRect().top;
    return {mouseX, mouseY};
}

function moveBlockWithMouse(clientX, clientY) {
    if (hasWon) return;

    const {mouseX, mouseY} = getMousePosition({clientX, clientY});

    const newX = Math.floor((mouseX - startX) / blockSize);
    const newY = Math.floor((mouseY - startY) / blockSize);

    if (selectedBlock.direction === 'horizontal') {
        if (newX >= 0 && newX + selectedBlock.width <= gridSize && canMove(selectedBlock, newX, selectedBlock.y)) {
            selectedBlock.x = newX;
        }
    } else if (selectedBlock.direction === 'vertical') {
        if (newY >= 0 && newY + selectedBlock.height <= gridSize && canMove(selectedBlock, selectedBlock.x, newY)) {
            selectedBlock.y = newY;
        }
    }

    updateBlockPosition(selectedBlock);
    checkWin(selectedBlock);
}

function canMove(block, newX, newY) {
    if (block.direction === 'horizontal') {
        const step = block.x < newX ? 1 : -1;
        for (let x = block.x; x !== newX; x += step) {
            if (!canMoveInDirection(block, x + step, block.y)) {
                return false;
            }
        }
    } else if (block.direction === 'vertical') {
        const step = block.y < newY ? 1 : -1;
        for (let y = block.y; y !== newY; y += step) {
            if (!canMoveInDirection(block, block.x, y + step)) {
                return false;
            }
        }
    }
    return true;
}

function isColliding(block, x, y, width, height) {
    return !(x + width <= block.x || x >= block.x + block.width || y + height <= block.y || y >= block.y + block.height);
}

function canMoveInDirection(block, x, y) {
    const isBlockedByOtherBlocks = blocks.some(b => b !== block && isColliding(b, x, y, block.width, block.height));

    return !isBlockedByOtherBlocks;
}

function updateBlockPosition(block) {
    const div = grid.querySelector(`[data-id="${block.id}"]`);
    div.style.transform = `translate(${block.x * blockSize}px, ${block.y * blockSize}px)`;
}

function checkWin(block) {
    if (hasWon) return;

    if (block.id !== key.id) return;

    if (block.x <= exitPosition.x && block.x + block.width >= exitPosition.x &&
        block.y <= exitPosition.y && block.y + block.height >= exitPosition.y) {
        hasWon = true;
        clearInterval(countdown);
        let timeText = '';
        if (timeLeft < 29) {
            let diff = 29 - timeLeft;
            let prettyDiff = diff < 10 ? `0${diff}` : diff;
            timeText = `00:00:${prettyDiff}`;
        }

        alert('Успех! Вы выиграли!' + (timeText ? ` Ваше время: ${timeText}` : ''));
        location.reload();
    }
}

timerButton.addEventListener('click', function () {
    timerButton.textContent = `00:00:30`;
    timerButton.disabled = true;

    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerButton.textContent = `00:00:00`;

            alert(':( Время вышло! Попробуйте еще раз!');
            location.reload();
        } else {
            let prettyTime = timeLeft < 10 ? `0${timeLeft}` : timeLeft;
            timerButton.textContent = `00:00:${prettyTime}`;
            timeLeft--;
        }
    }, 1000);

    timerButton.removeEventListener('click', arguments.callee); // Отключаем кнопку после первого нажатия
});

refreshButton.addEventListener('click', function () {
    location.reload();
});

function startCountdown(targetDate) {
    const countdown = document.getElementById('update-puzzle-time');
    const updateBlock = document.getElementById('update-puzzle');
    updateBlock.style.display = 'flex';

    function updateCountdown() {
        const now = new Date();
        const distance = targetDate - now.getTime();

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerText = '≈ ' +
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            countdown.innerText = "00:00:00";
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

const targetDate = new Date('Sun Aug 08 2024 20:30:00 GMT+0000').getTime();
const beforeFourHours = new Date(targetDate - 4 * 60 * 60 * 1000).getTime();
const nowTime = new Date().getTime();

if (targetDate > nowTime && beforeFourHours < nowTime) {
    startCountdown(targetDate);
}

const dateParam = getQueryParam('date');
const date = '2024-08-08';

const dateDisplay = document.getElementById('date-display');
dateDisplay.textContent = date;

initGrid(date);
addEventListeners();
