import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from "rollup-plugin-replace"
import babel from 'rollup-plugin-babel'
import rimraf from "rimraf"

rimraf.sync("dist");

const pkg = require("./package.json");
const version = pkg.version;

export default [
  {
    input: "src/js/app.js",
    output: {
      file: "dist/js/app.js",
      format: "cjs"
    },
    plugins: [
      replace({
        delimiters: [`{{`,`}}`],
        version
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react/index.js': [
            'Component', 
            'PureComponent', 
            'Fragment', 
            'Children', 
            'createElement', 
            'useLayoutEffect', 
            'useEffect',
            'useMemo',
            'useContext',
            'useReducer',
            'useRef'
          ],
          'node_modules/react-is/index.js': [
            'isValidElementType',
            'isContextConsumer'
          ],
          'node_modules/react-dom/index.js':[
            'unstable_batchedUpdates'
          ],
          'node_modules/uuid/index.js':[
            'v4'
          ]
        }
      })
    ]
  }
]