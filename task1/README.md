# Description
This application encodes and decodes entered text using Caesar's cipher.
# Options

CLI tool should accept 4 options (short alias and full name):
```
-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode
```

# Usage example:
First ation:
```
$ npm install
```
The app is ready for use. 
Example of code is bellow:
```
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
```