import { Box } from "@mui/material";
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactPlayer from 'react-player'


const Notebook = () => {
    return (
        <Box display="flex" width="100%" height="92vh"  justifyContent="space-evenly">
            

        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" height="92vh">
            <h1 style={{margin:"30px"}}>Wave Equation w/ Boundary Condition [numerical solution and video plot]</h1>
            <ReactPlayer
            url={"https://player.vimeo.com/video/795753331?h=6f1de49a94&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
            playing={true}
            controls={true}
            loop={true}
            muted={true}
            playsinline={true}
            width="80%"
            height="100%"
          />
        </Box>
        
    
        <Box overflow="scroll"  display="flex" flexDirection="column" justifyContent="left" alignItems="center" width="80%" height="100%" paddingRight="100px"  >
        
        <Box width="100%" paddingTop="10px">
        <h4>Library Imports</h4>
        <SyntaxHighlighter language="python">
            {"\n \
import numpy as np \n \
from mpl_toolkits.mplot3d import axes3d \n \
import matplotlib.pyplot as plt \n \
from matplotlib import cm \n"}
</SyntaxHighlighter>
</Box>

<Box width="100%" paddingTop="10px">
<h4>Grid Class Definition</h4>
<p>Here, we define a grid class. This class defines a 2 dimensional grid of discrete points; think array of x,y pairs</p>
<SyntaxHighlighter language="python" height="50%">
    {" class grid: \n \
    def __init__(self,domain,nx,ny): \n \
    self.nx=nx \n \
    self.ny=ny \n \
    self.xa,self.xb,self.ya,self.yb=domain \n \
    self.x=np.linspace(self.xa,self.xb,self.nx) \n \
    self.y=np.linspace(self.ya,self.yb,self.ny) \n \
    self.hx=(self.xb-self.xa)/(self.nx-1) \n \
    self.hy=(self.yb-self.ya)/(self.ny-1) \n \
    self.xx,self.yy=np.meshgrid(self.x,self.y) \n"}
</SyntaxHighlighter>
</Box>

<Box width="100%" paddingTop="10px">
<h4>Operator Class Definition</h4>
<p>Here, we create an operator class. The purpose of this class is to hold a set of functions that return the first or second derivative for a specified variable.</p>
<SyntaxHighlighter language="python" height="50%">
    {"class operator: \n \
    def __init__(self,grid): \n \
        self.grid=grid \n \
        \n \
    # compute the x derivative of U \n \
    def x(self,U): \n \
        pass \n \
        \n \
    # compute the y derivative of U   \n \
    def y(self,U): \n \
        pass \n \
        \n \
    # compute the xx derivative of U \n \
    def xx(self,U): \n \
        Uxx=0*U \n \
        Uxx[1:-2,:]=(U[0:-3,:]-2*U[1:-2,:]+U[2:-1,:])/(self.grid.hx**2) \n \
        return Uxx  \n \
        \n \
    def yy(self,U): \n \
        Uyy=0*U \n \
        Uyy[:,1:-2]=(U[:,0:-3]-2*U[:,1:-2]+U[:,2:-1])/(self.grid.hy**2) \n \
        return Uyy \n \
        \n "}
</SyntaxHighlighter>
</Box>

<Box width="100%" paddingTop="10px">
<h4>Variable Declarations</h4>
<SyntaxHighlighter language="python" height="50%">
    {" \
tf=10. \n \
N=101 \n \
nx,ny=N,N \n \
dt=1./N**2; \n \
#print('dt: ', dt) \n \
\n \
tplot=0.1 # plot time \n \
#print('tplot: ', tplot) \n \
\n \
pstep=int(tplot/dt) #plot step \n \
#print('pstep: ', pstep) \n \
\n \
dt = tplot/pstep  # adjust dt \n \
#print('dt: ', dt) \n \
\n \
mg=grid([-1,1,-1,1],nx,ny) # create an grid object \n \
op=operator(mg) # create finite difference operator for mg \n \
\n \
numberOfSteps=int(tf/dt)+1 \n \
u0=lambda x,y:np.exp(-((x**2)+(y**2))) \n \
\n \
U0=u0(mg.xx,mg.yy) \n \
\n \
U=[U0,U0,U0] # container for 3 layers of solutions \n \
\n \
fig = plt.figure(figsize=(8, 8),dpi=300) \n \
ax = fig.gca(projection='3d')  \n \
\n \
nplot=0 \n"}
</SyntaxHighlighter>
</Box>

<Box width="100%" paddingTop="10px">
<h4>Main Solutin Loop</h4>
<p>In this main loop, we set the current, previous, and next function definition used in the discrete solution calculation for the wave equation.<br />
At every loop through the update process, we save the plotted graph of the newly defined function for the equation.<br />
Sequencing these snapshots together produces the video to the left.</p>
<SyntaxHighlighter language="python" height="50%">
    {" \
for step in range(numberOfSteps+1): \n \
    cur=step%3      # 0 1 2 \n \
    prev=(step-1)%3 # 2 0 1 \n \
    new=(step+1)%3  # 1 2 0 \n \
    \n \
    U[new]=2*U[cur]-U[prev]+(dt**2)*(op.xx(U[cur])+op.yy(U[cur])) \n \
    \n \
    # apply boundary conditions \n \
    U[new][(0,-1),:]=0 \n \
    U[new][:,(0,-1)]=0 \n \
    \n \
    tnew=dt*(step+1) \n \
    if step%pstep==0: \n \
        nplot+=1 \n \
        plt.cla() \n \
        ax.plot_wireframe(mg.xx, mg.yy, U[new]) \n \
        ax.set_title('t=%5.2f'%tnew) \n \
        ax.set_zlim([0,1]) \n \
        fig.savefig('Frame%03d.png' %nplot,dpi=300)                   "}
        </SyntaxHighlighter>
        </Box>
        </Box>
        </Box>
    
    )
}

export default Notebook;