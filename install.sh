#!/bin/bash

dir=~/dotfiles
olddir=~/dotfiles_old
files="bashrc slate vimrc zshrc shell/"

echo "Creating $olddir for backup of any existing dotfiles in ~"
mkdir -p $olddir
echo "...done"


echo "Changing to dotfiles directory"
cd $dir
echo "...done"


for file in $files; do
    echo "Moving $file dotfile from ~ to $olddir"
    mv ~/.$file ~/dotfiles_old/
    echo "Creating symlink for $file in ~"
    ln -s $dir/$file ~/.$file
done
