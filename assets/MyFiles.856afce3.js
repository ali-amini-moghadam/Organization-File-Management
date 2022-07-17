import{F as g}from"./File.255d6b13.js";import{_ as s,c as v,r as d,o as m,a as f,b as t,F as y,d as F,e as l}from"./index.26420ced.js";var x="/assets/add-file.d7241cdc.svg",b="/assets/upload.3ed33687.svg",p="/assets/cancel.deb9a89e.svg";const w={name:"CreateFile",mounted:function(){let e=document.getElementById("AddFileModal");document.querySelector("body").appendChild(e)}},$=v('<button class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#AddFileModal" data-v-9870fc82><img src="'+x+'" alt="add-file" width="32" height="32" data-v-9870fc82> \u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u0627\u06CC\u0644 </button><div class="modal fade text-end" id="AddFileModal" tabindex="-1" aria-labelledby="AddFileModalLabel" aria-hidden="true" data-v-9870fc82><div class="modal-dialog" data-v-9870fc82><div class="modal-content" data-v-9870fc82><div class="modal-header justify-content-center" data-v-9870fc82><button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close" data-v-9870fc82></button><h5 class="modal-title text-center fw-bold" data-v-9870fc82>\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u0627\u06CC\u0644</h5></div><div class="modal-body px-4" data-v-9870fc82><div class="mb-3" data-v-9870fc82><label for="file-title-input" class="form-label" data-v-9870fc82>\u0639\u0646\u0648\u0627\u0646 \u0641\u0627\u06CC\u0644: *</label><input type="text" class="form-control" id="file-title-input" placeholder="\u0628\u0631\u0627\u06CC \u0645\u062B\u0627\u0644: \u0641\u0627\u06CC\u0644 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0647\u0645\u06A9\u0627\u0631\u06CC" data-v-9870fc82></div><div class="mb-3" data-v-9870fc82><label for="description-input" class="form-label" data-v-9870fc82>\u062A\u0648\u0636\u06CC\u062D\u0627\u062A:</label><textarea class="form-control" id="description-input" rows="3" placeholder="\u062F\u0631 \u0635\u0648\u0631\u062A \u0644\u0627\u0632\u0645 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A\u06CC \u062F\u0631 \u0645\u0648\u0631\u062F \u0641\u0627\u06CC\u0644 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F ..." data-v-9870fc82></textarea></div><div class="mb-3" data-v-9870fc82><label for="formFile" class="form-label" data-v-9870fc82>\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644: *</label><input class="form-control" type="file" id="formFile" data-v-9870fc82></div><div class="mb-3" data-v-9870fc82><label for="expire-file-input" class="form-label" data-v-9870fc82>\u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u0642\u0636\u0627\u0621:</label><input type="datetime-local" id="expire-file-input" class="form-control" data-v-9870fc82></div><div class="mb-3" data-v-9870fc82><label for="file-access-levels" class="form-label" data-v-9870fc82> \u0633\u0637\u062D \u062F\u0633\u062A\u0631\u0633\u06CC: * </label><select class="form-select" id="file-access-levels" data-v-9870fc82><option selected data-v-9870fc82>\u06CC\u06A9 \u0633\u0637\u062D \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F</option><option value="1" data-v-9870fc82>\u062F\u0633\u062A\u0631\u0633\u06CC \u0641\u0642\u0637 \u0628\u0631\u0627\u06CC \u062E\u0648\u062F (\u0634\u062E\u0635\u06CC)</option><option value="3" data-v-9870fc82>\u0633\u0637\u0648\u062D 2 (\u0645\u0639\u0627\u0648\u0646\u0627\u0646)</option><option value="4" data-v-9870fc82>\u0633\u0637\u0648\u062D 3 (\u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646)</option></select></div></div><div class="modal-footer" data-v-9870fc82><button type="button" class="btn btn-sm btn-success flex-grow-1 mx-4" data-v-9870fc82><img src="'+b+'" alt="upload-img" width="32" height="32" data-v-9870fc82> \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0627\u06CC\u0644 </button><button type="button" class="btn btn-sm btn-danger flex-grow-1 mx-4" data-bs-dismiss="modal" data-v-9870fc82><img src="'+p+'" alt="upload-img" width="32" height="32" data-v-9870fc82> \u0644\u063A\u0648 \u0639\u0645\u0644\u06CC\u0627\u062A </button></div></div></div></div>',2);function M(e,a,o,i,c,n){return $}var C=s(w,[["render",M],["__scopeId","data-v-9870fc82"]]),A="/assets/add-folder.cbba3605.svg";const B={name:"CreateFolder"},E=v('<button class="btn btn-primary w-50 disabled" data-bs-target="#AddFolderModal"><img src="'+A+'" alt="add-folder" width="32" height="32"> \u0627\u06CC\u062C\u0627\u062F \u0641\u0648\u0644\u062F\u0631 </button><div class="modal fade" id="AddFolderModal" tabindex="-1" aria-labelledby="AddFolderModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header justify-content-center"><button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button><h5 class="modal-title text-center fw-bold">\u0627\u06CC\u062C\u0627\u062F \u0641\u0648\u0644\u062F\u0631</h5></div><div class="modal-body px-4"></div><div class="modal-footer justify-content-center"><button type="button" class="btn btn-sm btn-success flex-grow-1 mx-4"><img src="'+b+'" alt="upload-img" width="32" height="32"> \u0627\u06CC\u062C\u0627\u062F \u0641\u0648\u0644\u062F\u0631 </button><button type="button" class="btn btn-sm btn-danger flex-grow-1 mx-4" data-bs-dismiss="modal"><img src="'+p+'" alt="upload-img" width="32" height="32"> \u0644\u063A\u0648 \u0639\u0645\u0644\u06CC\u0627\u062A </button></div></div></div></div>',2);function I(e,a,o,i,c,n){return E}var j=s(B,[["render",I]]);const k={name:"MyFiles",components:{File:g,CreateFileForm:C,Folder:j},data:function(){return{sectionTitle:"\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0645\u0646",menuItemOrder:1}},emits:["changeStates"]},L={class:"my-files-container"},N={class:"my-files-list row gx-5 gy-3 overflow-auto p-3"},S={class:"row file-folder-container bg-white rounded-top p-3 shadow"},V={class:"col-sm-6 text-center"},T={class:"col-sm-6 text-center"};function q(e,a,o,i,c,n){const u=d("File"),_=d("CreateFileForm"),h=d("Folder");return m(),f("div",L,[t("div",N,[(m(),f(y,null,F(10,r=>t("div",{class:"col-sm-6 col-md-3",key:`my-file-${r}`},[l(u,{url:`/my-files/files/${r}`,name:"File Title","show-triple-dot-button":!0},null,8,["url"])])),64))]),t("div",S,[t("div",V,[l(_)]),t("div",T,[l(h)])])])}var D=s(k,[["render",q],["__scopeId","data-v-97cf7a0a"]]);export{D as default};
