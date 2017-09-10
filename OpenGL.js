var GLSurfaceView=android.opengl.GLSurfaceView;
var MainActivity=com.mojang.minecraftpe.MainActivity;
var Runnable=java.lang.Runnable;
var context=MainActivity.currentMainActivity.get();

function newLevel(){
	context.runOnUiThread(new Runnable({
		run:function(){
			try{
				var view=new GLSurfaceView(context);
				view.setRenderer(new GLSurfaceView.Renderer({
					onSurfaceCreated:function(gl,config){
					},
					onSurfaceChanged:function(gl,width,height){
					},
					onDrawFrame:function(gl){
					}
				}));
				context.setContentView(view);
			}
			catch(error){
				throw new Error(error);
			}
		}
	}));
}
