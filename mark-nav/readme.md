## 利用marked高亮及自定义生成多级导航

引用：

```
npm i marked
npm i highlight.js
```

```js
import { markNav } from '../utils/markNav'
```

使用方式：

```js
function Artic() {
    //data--markdown字符串
    const { mytree, html} = markNav(data)
    //递归生成列表
    const getmenu = (node) => {
        return <ul className="nav-list">
            {
                node.map((item, index) => {
                    return <li key={index}>
                        <a href={'#header-' + item.index}>{item.title}</a>
                        {item.children.length > 0 ? getmenu(item.children) : null}
                    </li>
                })
            }
        </ul>
    }
	//渲染
	return <>
    	{getmenu(navTree)}
        <div className="detailed-content"
         dangerouslySetInnerHTML={{ __html: html }}
         >
       </div>
    </>
}
```

