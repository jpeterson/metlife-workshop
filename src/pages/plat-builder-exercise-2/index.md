---
title: "Plat Builder Exercise #2"
date: "2018-01-02"
---

In this exercise, we will **Create a typical Plat Package with new tracts** so that we can learn how to assign polygons to tracts that don't already have them.

We will use much of what we learned in the previous exercise, so some of the basic steps may be omitted here. Head back to [Exercise #1](/plat-builder-exercise-1) if you need a refresher.

## Start a new Plat Package and add Tracts

1. Start a **New Plat Package** from the **Plat Builder Homepage**.

    - If you have any tracts already listed, go ahead and remove them.

2. Search for any loan with tracts **which do not have boundaries yet**. You can tell that a tract does not have a boundary because the thumbnail will be missing (instead of a small map). You will need three tracts for this exercise - they can all be from the same loan, or from different loans. **Add each of these tracts to your package**.

    - ℹ️  *This step intentionally asks you to find a random loan because we don't want to all be editing the same loan at the same time!*

    - When you see a tract with a missing thumbnail, it means **that tract exists in REIOS, but has never been used in MAPS**.

You now have three tracts in your Plat Package. Notice that, unlike the previous exercise, you cannot move continue yet. This is because you have selected tracts without boundaries -- let's fix that!

## Add Polygons to Tracts

Now that we have identified the tracts we'd like to include in our Plat Package, we need to assign polygons to them. In this section we will learn a few ways to do just that.

As an overview, there are 3 primary methods for assigning polygons to your tracts:

> - Draw on Map
> - Select CLU (or Existing Tract Shape)
> - Upload Shapefile or KML

### Draw a Polygon from scratch

The most basic (and least accurate) way to assign a polygon to our tract is by simply drawing it by hand on the map. While this is probably the most basic method, it should also be considered the least desirable option, since using authoritative data (i.e. Shapefiles, KML, or CLUs) will usually result in higher quality Plat Packages.

1.  Click **Add Polygon** on the first tract in your list, and choose **Draw on Map**.  

    - Plat Builder is now in **Drawing Mode** -- you can tell because the **Drawing Toolbar** is overlaid on top of the map.

    Before you draw your tract, you need to find the place it belongs in. The Search options in Plat Builder can be broken down into 2 categories: **PLSS Township/Range Descriptions** and **Places**. By default, you get results from both of these categories. If you would prefer to only search one category, you can click the dropdown button to the left of the Search and choose your category.

    **Township/Range Descriptions** are formatted as:   
    **T(##)(D) R(##)(D), (ST)**, where (##) is the number (this can be one to three characters), (D) is the cardinal direction, and (ST) is the two-letter state abbreviation.

    **Places** can include addresses, business names, points of interest, administrative areas, and more.


2. Let's assume you already know that this tract exists in the following location: **T14N R31W, NE**. Enter that T/R description into the **Search** located at the top of the map. Once you've located the T/R, zoom in to any of section besides 16 (we're going to use that one later).


  Let's have a look at the new tools available in **Drawing Mode**. You'll notice there are actually two new things overlaid on the map -- the **Drawing Toolbar** at the top, and the **Measurement Toolbar** at the bottom.

  ❗  The **Measurement Toolbar** is purely there to help you as you use the **Drawing Toolbar**, so you won't really interact with it. As you draw shapes over the next few sections, be sure to keep an eye on this toolbar too, it will tell you the **Perimeter** and **Area** of the **current shape** and **total of all the shapes**.

  The **Drawing Toolbar** is how we manipulate polygons on the map. By default, the toolbar is in **selection mode**, which we'll cover later -- the important tools for this step are: **Rectangle**, **Oval**, and **Polygon** drawing options. You can use these three drawing options together to sketch the basic shape of your tract.

3. Use the three drawing options to sketch a shape on the map -- try tracing the boundary of something in the satellite imagery. Note that you can draw as many shapes as you want, and they will all be merged into a single shape when you're done. This technique is very powerful for creating more complex shapes. Don't worry about your shapes overlapping either, as overlaps will be cleaned up for you.

    - It is important to note that **Plat Builder** is not designed to be an advanced feature drawing/editing application -- this process is intended to allow you to quickly sketch a tract outline. We'll go over other tools that support advanced drawing capabilities later.

    That being said, there are a few more advanced features of the **Drawing Toolbar** to help you draw more accurately. Let's try those out.

4. Once you've finished drawing one or more shapes, choose the **Select Tool** (the mouse arrow) and click your shape to select it. You'll notice your shape looks a bit different after clicking it -- these circles and squares are called **drag handles**, and they allow you to edit your shape.

    First, you can simply click inside your shape and drag the whole thing to move it to another location.

    Dark gray drag handles appear over **existing vertices**, and dragging them lets you **move that vertex**. You can also **right click** these drag handles, and select **Delete** to remove that vertex from your shape.

    Light gray drag handles appear **between two existing vertices**, dragging these lets you **add new vertices** to your shape.

    The **Square that appears above your shape** is also a drag handle, dragging this one **rotates** your shape.

    Lastly, if you want to delete the shape you've selected, you can simply press the **delete key**.

5. Once you're happy with your polygon, click **Confirm** to save it as the new polygon assigned to your tract. You should see your drawing disappear and get replaced with a labeled tract polygon, and the **Add Polygon** button will disappear from your tract in the tract list.

## Start with a CLU

Now that we know how to use the **Drawing Toolbar**, let's give ourselves a little bit of a head start. Plat Builder comes with CLUs that can help with this process.

1.  Click **Add Polygon** on the first tract in your list, and choose **Select CLU**.

    - Plat Builder is now in **Selection Mode**. You can tell by the **Selection Toolbar** that is overlaid at the top of the map. If this toolbar is visible, you can select polygons from the map, which will be used as templates later.

    - In addition to the **Selection Toolbar**, you will see CLU features (labeled with their acreage) overlaid on top of the map now, a few things to keep in mind: CLUs don't exist everywhere, so if you don't see them, check your location. Also, CLUs won't display if you're zoomed too far out, so you may need to zoom in a few times if you're looking at a really large area on the map.

2. Select a few CLUs -- you'll have a chance to make edits in the next step. Once you're happy with your selection, click **Confirm**.

    - Once you've confirmed your selection, you'll notice the **Selection Toolbar** has gone away and been replaced by the **Drawing Toolbar**, which we learned about in the previous section.

    - Using what we learned about **selecting and editing shapes** in the previous section, make any edits you think are necessary to convert these CLUs into a tract polygon. One of the most common tasks at this point is to "close off" CLU's. Often, CLU shapes don't include roads or other features, and you may prefer to have a contiguous (i.e. no "holes") shape instead of one that appears carved out in places. Using the technique mentioned in the previous section, you can edit vertices in these adjacent shapes so that they overlap slightly -- that way they will full merge together when you're done.

      Note that it's quite possible you won't need to make any edits.

3. When you're happy with the shape of your tract polygon, click **Confirm**.

    - Note that **Use Existing Tract Shape** behaves exactly like **Select CLU**, except you are presented with existing tract shapes to select from.

## Upload a Shapefile or KML

❗  Download the following Shapefile to use in this section: [198934.4.zip](/files/198934.4.zip)

The ideal method for assigning a polygon to a tract is to use a pre-created **Shapefile or KML file** (KMZ is also supported, its really just a zipped up KML). Shapefiles and KML files are both industry standard formats for geographic data, and are can be used in many different software applications.

This exercise uses a Shapefile, but the process is the same for a KML or KMZ.

1.  Click **Add Polygon** on the first tract in your list, and choose **Upload Shapefile or KML**.

2. Click **Choose File** and upload [198934.4.zip](/files/198934.4.zip).

    - Note that Shapefiles are actually made up of many files inside a folder. For this reason, you must zip your Shapefiles before uploading them to Plat Builder.

3. Once you see the green check mark ("Your file checks out!"), click **Upload File**.

    - Your Shapefile will upload and immediately be added to the map (notice it is in our reserved section 16), and the now familiar **Drawing Mode** will be activated. From here, you can use the tools and techniques you've learned in previous sections to make any edits (if you want) to the shape.

4. When you're happy with your tract polygon, click **Confirm**.

## Tracts completed  🎉
We now have three valid tracts! You'll notice the **Continue** button in the **Add Tracts** sidebar is green again, and we can move forward in the workflow.

From here on out, you're welcome to complete your Plat Package if you'd like, but we won't cover anything different from Exercise #1.
