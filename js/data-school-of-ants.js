// INSECT BODY PARTS

// Wordlist data
// 0,1 = X/Y start letter, 2,3 = X/Y end letter, 4 = word, 5=colour

var wordList = [
    [40, 18, 309, 18, 'formicidae', '0,255,36,0.5'],
    [219, 168, 100, 167, 'sting', '255,182,0,0.5'],
    [219, 197, 219, 349, 'thorax', '255,0,237,0.5'],
    [39, 407, 219, 410, 'abdomen', '182,221,217,0.5'],
    [38, 229, 38, 351, 'colon', '41,171,226,0.5'],
    [38, 79, 40, 349, 'supercolon', '245,157,189,0.5'],
    [159, 108, 250, 199, 'nest', '148,237,100,0.5'],
    [278, 139, 279, 321, 'bullant', '100,176,237,0.5'],
    [130, 379, 309, 380, 'fireant', '237,100,189,0.5'],
    [69, 318, 280, 319, 'crazyant', '198,198,161,0.5 '],
    [308, 81, 311, 260, 'petiole', '0,255,255,0.5'],
    [68, 48, 70, 200, 'gaster', '0,255,36,0.5'],
    [130, 49, 250, 170, 'wings', '255,182,0,0.5'],
    [309, 408, 100, 199, 'invasive', '255,0,237,0.5']
];

// Grid of letters

var letterString = "\
FORMICIDAE\
KGLWBQVFYN\
SAZLIJPEXP\
USEVNNFTSE\
PTCSLEGRBT\
EEGNITSSUI\
RREZFLTTLO\
CDFVRMHJLL\
OHTWIEOMAE\
LNERTSRFNZ\
OCRAZIANTM\
NBNDQJXVJF\
YWHFIREANT\
ABDOMENHEI\
";

// Columns in this grid
var columnLength = 10;