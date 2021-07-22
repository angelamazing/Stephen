//节点
function Node(element, left, right,parents)	{
	this.element = element;
	this.left = left;
	this.right = right;
	this.parents = parents; 
	this.show = function() {
		return this.element;
	}
}
 
//二叉树
function BST() {
	this.root = null;
 
	//插入节点
	this.insert = function(element){
		let node = new Node(element, null, null);
		if(this.root === null) this.root = node;
		else {
			let buffer = this.root;
			while(true) {
				if(node.element > buffer.element) {
					if(buffer.right === null) {
						buffer.right = node;
						node.parents = buffer;
						break;
					} else {
						buffer = buffer.right;
					}
				}
				if(node.element <= buffer.element) {
					if(buffer.left === null) {
						buffer.left = node;
						node.parents = buffer;
						break;
					} else {
						buffer = buffer.left;
					}
				}
			}
		}
	}
 
	//先序遍历
	this.preOrederTraversal = function(node) {
		if(node === null) return;
		else {
			console.log(node.show());
			this.preOrederTraversal(node.left);
			this.preOrederTraversal(node.right);
		}
	}
 
	//中序遍历
	this.inOrederTraversal = function(node) {
		//console.log(node.element);
		if(node === null) return;
		else {
			this.inOrederTraversal(node.left);
			console.log(node.show());
			this.inOrederTraversal(node.right);
		}
	}
 
	//后序遍历
	this.postOrederTraversal = function(node) {
		if(node === null) return;
		else {
			this.postOrederTraversal(node.left);
			this.postOrederTraversal(node.right);
			console.log(node.show());
		}
	}
}
 
let bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(3);
bst.insert(99);
bst.insert(22);
 
bst.preOrederTraversal(bst.root); //23 16 3 22 45 99
bst.inOrederTraversal(bst.root);  // 3 16 22 23 45 99
bst.postOrederTraversal(bst.root); //3 22 16 99 45 23
