# modal-window

<p><a href="https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=nTwdEUJlwszBJ7rOljWIcAxAOYziZO_PLzmICH_8zs6WA7QrC8tmDlyNet0&dispatch=5885d80a13c0db1f8e263663d3faee8d64813b57e559a2578463e58274899069" target="_blank"><img src="https://camo.githubusercontent.com/dca8074e055d4485a6fb40b7d1f5dce7c202503b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70617970616c2d646f6e6174652d626c75652e737667" alt="Donate" data-canonical-src="https://img.shields.io/badge/paypal-donate-blue.svg" style="max-width:100%;"></a></p>

<h3>A modal window style plugin for <a href="http://discourse.org">Discourse</a>.</h3>

<h4>Demo</h4>
<ul>
<li>Check out a live instance of Discourse with Modal-window installed on it here : <a href="http://kitedor.info">http://kitedor.info</a>
(You'll don't have to make an account to see the modal window, just click on the links "videos" and "news" from the top menu in the header)</li>
<li>The plugin will open a modal window from a forum post by authorizing (whitelisting) the class "label"whith this line:
Discourse.Markdown.whiteListTag('label', 'for', '*');
</li>

<li>You don't need this plugin to open a modal window outside the forum, in this case, just copy the HTML and CSS code in your forum as is explains in part <b>Installation</b>.</li>
</ul>

<ins><img src="https://github.com/AlexRabolin/modal-window/blob/master/Capture%20d’écran%202016-07-01%20à%2017.11.07.png" alt="alt tag" style="max-width:60%;"></ins>

<h5>Modal window whith contents :</h5>

<ins><img src="https://github.com/AlexRabolin/modal-window/blob/master/Capture%20d’écran%202016-07-04%20à%2009.17.52.png" alt="alt tag" style="max-width:60%;"></ins>

<h4>Installation</h4>
<ul>
<li>Edit your web template and add the project clone url. (<a href="https://meta.discourse.org/t/install-a-plugin/19157">https://meta.discourse.org/t/install-a-plugin/19157</a>)
<li>Rebuild your web container so that the plugin installs.</li>
<li>Insert the modal window HTML code in your header has this location : http://your-forum/admin/customize/css_html/1/head-tag.</li>
</ul>
```
<div class="modal1">
  <input class="modal1-open" id="first-modal-window" type="checkbox" hidden>
    <div class="modal1-wrap" aria-hidden="true" role="dialog">                   
      <label class="modal1-overlay" for="first-modal-window"></label>       
        <div class="modal1-dialog">
            <div class="modal1-header"><h2>YOUR TITLE HERE</h2>   
                <label class="btn-close" for="first-modal-window" aria-hidden="true">×</label>
            </div>
                <div class="modal1-body" style="text-align:center;">YOUR CONTENTS HERE</div>
        </div>
    </div>
</div>
```
<ul>
<li>Insert the modal window CSS code in your header has this location : http://your-forum/admin/customize/css_html/1/css.</li>
</ul>
```
/* Generic modal window, make specific modifiquations in the HTML  with tag style="" ... */
 
.modal1-wrap:before {
    content:'';
    display:none;
    background:rgba(0,0,0,0.6);
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:101
    }
    
.modal1-overlay {
    display:none;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:102
}

.modal1-open:checked ~ 
.modal1-wrap:before,
.modal1-open:checked ~ 
.modal1-wrap 
.modal1-overlay {
    display:block
}

.modal1-open:checked ~ 
.modal1-wrap 
.modal1-dialog {
    transform:translate(-50%,-50%);
    position:fixed;
    top:50%; 
}

.modal1-dialog {
    background:#fefefe;
    border:#555 solid 1px;
    border-radius:5px;
    position:fixed;
    left:50%;
    top:-100%;
    transform:translate(-50%,-150%);
    transition:transform .4s ease-in-out;
    width:92%;
    height:80%;
    //max-width:600px;
    z-index:1001;
    overflow: scroll;
    //fond de la fenetre modal
    background-color:rgb(241, 242, 246) !important;
}



.modal1-header h2 {
text-align: center;
line-height: 1em;
font-size: 2rem;
margin: 0;
font-family: 'neuropol_x_rgregular', 'Open sans', sans-serif !important;
color: #4fc1e9;
border-bottom: #eaeaea solid 1px;
padding: 20px 20px;
}

.modal1 .btn-close {
    color: #222;
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 0px;
    right: 2px;
    text-decoration: none;
    margin: 4px;
    float: left
    }
    
.modal1 .btn-close:hover,
.modal1 .btn-close:focus{
    color:#999
    }

.modal1-body {
    padding:20px;
}

.modal1-body p {
    margin:0;
}    

.modal1-footer {
    border-top:#eaeaea solid 1px;
    text-align:right
}
```

<h4>Running the modal window</h4>
<ul>
<li>For runing the modal window outside the forum, just copy the HTML code where you want like that :</li></ul>
```
<label for="first-modal-window"><a>open the modal window</a></label>
```
<ul>
<li>For runing the modal window from a forum post, just copy the HTML code in the post :</li></ul>
```
<a href="#"><label for="first-modal-window"><span style="cursor:pointer">open the modal window</span></label></a>

```
<h4>Important</h4>
<p>Create as many modal window as you like.</p>
<p>But,must imperatively change the following three fields with the same name in each HTML modal window : 
<b>id="" and two for=""</b>.</p>
<h5>In our example, this is :</h5> 
```
id="first-modal-window" and for="first-modal-window".
```
<p>After this, we must match the name of id="" with the name of for="" in the html line.</p>
<h5>In our example, this is :</h5>
```
<label for="first-modal-window">
```

