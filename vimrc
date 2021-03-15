set nocompatible
set modeline
set number
set hlsearch
set incsearch
set hidden
set cursorline
set ts=2 sts=2 sw=2 expandtab
set laststatus=2
set backspace=2
set relativenumber
syntax on
syntax enable
filetype indent plugin on
set modeline
autocmd FileType python setlocal expandtab shiftwidth=2 softtabstop=2 tabstop=2
set statusline=%f\ %h%w%m%r\ %=%(%l,%c%V\ %=\ %P%)

set nowrapscan




highlight CursorLine ctermbg=Blue ctermfg=White cterm=none
highlight Cursor ctermbg=Yellow ctermfg=Black cterm=none

nnoremap tn :tabnew<Space>
nnoremap tk :tabnext<CR>
nnoremap tj :tabprev<CR>
nnoremap th :tabfirst<CR>
nnoremap tl :tablast<CR>
nnoremap tc: tabclose<CR>
