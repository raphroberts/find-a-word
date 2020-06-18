// INSECT BODY PARTS

// Wordlist data
// 0,1 = X/Y start letter, 2,3 = X/Y end letter, 4 = word, 5=colour

var wordList = [
    [40, 79, 339, 79, 'evaporation', '0,255,36,0.5'],
    [129, 349, 339, 138, 'catalyst', '255,182,0,0.5'],
    [249, 17, 71, 19, 'density', '255,0,237,0.5'],
    [369, 378, 159, 168, 'molecule', '182,221,217,0.5'],
    [430, 408, 431, 171, 'indicator', '41,171,226,0.5'],
    [370, 19, 371, 139, 'solid', '245,157,189,0.5'],
    [429, 139, 158, 408, 'exothermic', '148,237,100,0.5'],
    [130, 409, 430, 109, 'endothermic', '100,176,237,0.5'],
    [248, 168, 190, 168, 'gas', '237,100,189,0.5'],
    [69, 259, 219, 408, 'liquid', '198,198,161,0.5 '],
    [41, 349, 70, 349, 'PH', '0,255,36,0.5'],
    [159, 290, 71, 200, 'base', '255,182,0,0.5'],
    [69, 139, 160, 230, 'acid', '255,0,237,0.5'],
    [39, 49, 39, 229, 'neutral', '0,255,36,0.5']

];

// Grid of letters

var letterString = "\
PYTISNEDMZMSBR\
NYLMVYWMLYWORJ\
EVAPORATIONLBJ\
UYPXJJNZMYWILC\
TADQNDPZMJTDIE\
RJCNESAGCSQMXR\
AENILLMTYARONO\
LVSLDYULNETDMT\
SLKAWKACHHOATA\
IWINBTYTETNLLC\
DLTQAXORHLATLI\
PHDCUDMEPROGLD\
ZNDMNIRYTYLMYN\
YNTECMDUKTVDRI\
";

// Columns in this grid
var columnLength = 14;