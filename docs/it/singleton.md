# singleton
#### 2015/09/29
单例模式（Singleton）是几个创建模式中最对立的一个，它的主要特点不是根据用户程序调用生成一个新的实例，而是控制某个类型的实例唯一性，它包含的角色只有一个，就是Singleton，它拥有一个私有构造函数，这确保用户无法通过new直接实例它。除此之外，该模式中包含一个静态私有成员变量instance与静态公有方法Instance()。Instance()方法负责检验并实例化自己，然后存储在静态成员变量中，以确保只有一个实例被创建。

最近找工作遇到了不少需要写单例模式的卷子，所以今天上网查找一下资料。这里借用网上博主[黑桃杰克](http://wuchong.me/)的一篇文章。

[链接](http://wuchong.me/blog/2014/08/28/how-to-correctly-write-singleton-pattern/)